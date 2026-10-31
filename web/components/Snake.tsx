"use client";

import * as React from "react";
import {
  Body1,
  Button,
  Caption1,
  Card,
  Subtitle1,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";

type Point = { x: number; y: number };
type Dir = "up" | "down" | "left" | "right";
type Grid = { width: number; height: number };
type State = { grid: Grid; snake: Point[]; direction: Dir; food: Point; score: number; gameOver: boolean };

const GRID: Grid = { width: 20, height: 20 };
const STEP: Record<Dir, Point> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};
const OPPOSITE: Record<Dir, Dir> = { up: "down", down: "up", left: "right", right: "left" };
const KEYS: Record<string, Dir> = {
  arrowup: "up", w: "up", arrowdown: "down", s: "down",
  arrowleft: "left", a: "left", arrowright: "right", d: "right",
};
const TOUCH: { label: string; direction: Dir }[] = [
  { label: "Up", direction: "up" },
  { label: "Left", direction: "left" },
  { label: "Down", direction: "down" },
  { label: "Right", direction: "right" },
];

const key = (p: Point) => `${p.x},${p.y}`;

function placeFood(grid: Grid, snake: Point[], rand = Math.random): Point {
  const taken = new Set(snake.map(key));
  const free: Point[] = [];
  for (let y = 0; y < grid.height; y += 1)
    for (let x = 0; x < grid.width; x += 1) if (!taken.has(`${x},${y}`)) free.push({ x, y });
  return free.length ? free[Math.floor(rand() * free.length)] : { x: 0, y: 0 };
}

function initial(grid: Grid = GRID): State {
  const cx = Math.floor(grid.width / 2);
  const cy = Math.floor(grid.height / 2);
  const snake = [{ x: cx + 1, y: cy }, { x: cx, y: cy }, { x: cx - 1, y: cy }];
  return { grid, snake, direction: "right", food: placeFood(grid, snake), score: 0, gameOver: false };
}

function tick(state: State, wanted: Dir): State {
  if (state.gameOver) return state;
  const direction = wanted && OPPOSITE[state.direction] !== wanted ? wanted : state.direction;
  const head = state.snake[0];
  const next = { x: head.x + STEP[direction].x, y: head.y + STEP[direction].y };
  const { width, height } = state.grid;
  if (next.x < 0 || next.y < 0 || next.x >= width || next.y >= height ||
      state.snake.some((p) => p.x === next.x && p.y === next.y)) {
    return { ...state, gameOver: true, direction };
  }
  const ate = next.x === state.food.x && next.y === state.food.y;
  const snake = [next, ...state.snake];
  let { food, score } = state;
  if (ate) {
    score += 1;
    food = placeFood(state.grid, snake);
  } else {
    snake.pop();
  }
  return { ...state, snake, food, score, direction };
}

const useStyles = makeStyles({
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: "32px 5vw",
  },
  card: {
    width: "min(520px, 100%)",
    padding: "24px",
    gap: "16px",
    borderRadius: "24px",
    backgroundColor: "var(--surface)",
    backdropFilter: "blur(18px) saturate(140%)",
    WebkitBackdropFilter: "blur(18px) saturate(140%)",
    border: "1px solid var(--hairline)",
    boxShadow: "inset 0 1px 0 var(--highlight), var(--elevation)",
  },
  header: { display: "flex", alignItems: "baseline", justifyContent: "space-between" },
  h1: {
    margin: 0,
    fontSize: tokens.fontSizeHero800,
    lineHeight: tokens.lineHeightHero800,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  score: { margin: 0, color: tokens.colorNeutralForeground2 },
  grid: {
    position: "relative",
    display: "grid",
    gap: "2px",
    padding: "6px",
    aspectRatio: "1 / 1",
    borderRadius: tokens.borderRadiusLarge,
    backgroundColor: "var(--surface-strong)",
    border: "1px solid var(--hairline)",
  },
  over: { opacity: 0.9 },
  cell: { borderRadius: "3px", backgroundColor: "var(--surface)" },
  snake: { backgroundColor: tokens.colorBrandBackground },
  head: { backgroundColor: tokens.colorBrandBackgroundPressed },
  food: { backgroundColor: tokens.colorPaletteRedBackground3, borderRadius: "50%" },
  overlay: {
    position: "absolute",
    inset: 0,
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    borderRadius: tokens.borderRadiusLarge,
    backgroundColor: "var(--overlay)",
    backdropFilter: "blur(4px)",
  },
  overlayInner: { display: "grid", gap: "8px", justifyItems: "center" },
  h2: { margin: 0, fontSize: tokens.fontSizeBase600, fontWeight: tokens.fontWeightSemibold },
  controls: { display: "flex", gap: "8px", flexWrap: "wrap" },
  touch: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" },
  hint: { color: tokens.colorNeutralForeground3, margin: 0 },
});

export function Snake() {
  const s = useStyles();
  const [state, setState] = React.useState<State>(() => initial());
  const [paused, setPaused] = React.useState(false);
  const wanted = React.useRef<Dir>(state.direction);
  const running = React.useRef(true);

  const restart = () => {
    const fresh = initial(GRID);
    wanted.current = fresh.direction;
    setState(fresh);
    setPaused(false);
  };
  const togglePause = () => setPaused((p) => !p);

  React.useEffect(() => {
    running.current = !paused && !state.gameOver;
  }, [paused, state.gameOver]);

  React.useEffect(() => {
    wanted.current = state.direction;
  }, [state.direction]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      const dir = KEYS[k];
      if (dir) {
        e.preventDefault();
        wanted.current = dir;
      }
      if (k === " ") {
        e.preventDefault();
        togglePause();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  React.useEffect(() => {
    if (!running.current) return;
    const id = window.setInterval(() => setState((st) => tick(st, wanted.current)), 130);
    return () => window.clearInterval(id);
  }, [paused, state.gameOver]);

  const cells = React.useMemo(() => {
    const body = new Set(state.snake.map(key));
    const head = state.snake[0];
    const out: React.ReactNode[] = [];
    for (let y = 0; y < state.grid.height; y += 1)
      for (let x = 0; x < state.grid.width; x += 1) {
        const k = `${x},${y}`;
        let cls = s.cell;
        if (body.has(k)) cls = mergeClasses(s.cell, s.snake, x === head.x && y === head.y && s.head);
        else if (state.food.x === x && state.food.y === y) cls = mergeClasses(s.cell, s.food);
        out.push(<div key={k} className={cls} />);
      }
    return out;
  }, [state, s]);

  return (
    <main className={s.page}>
      <Card className={s.card}>
        <div className={s.header}>
          <h1 className={s.h1}>Snake</h1>
          <Subtitle1 as="p" className={s.score}>Score: {state.score}</Subtitle1>
        </div>
        <div
          className={mergeClasses(s.grid, state.gameOver && s.over)}
          style={{ gridTemplateColumns: `repeat(${state.grid.width}, minmax(0, 1fr))` }}
        >
          {cells}
          {state.gameOver ? (
            <div className={s.overlay}>
              <div className={s.overlayInner}>
                <h2 className={s.h2}>Game Over</h2>
                <Body1 as="p" style={{ margin: 0 }}>Final score: {state.score}</Body1>
                <Button appearance="primary" shape="circular" onClick={restart}>Restart</Button>
              </div>
            </div>
          ) : null}
        </div>
        <div className={s.controls}>
          <Button appearance="primary" shape="circular" onClick={togglePause}>
            {paused ? "Resume" : "Pause"}
          </Button>
          <Button appearance="outline" shape="circular" onClick={restart}>Restart</Button>
        </div>
        <div className={s.touch}>
          {TOUCH.map((t) => (
            <Button key={t.direction} appearance="outline" onClick={() => (wanted.current = t.direction)}>
              {t.label}
            </Button>
          ))}
        </div>
        <Caption1 as="p" className={s.hint}>Controls: Arrow keys or WASD. Space to pause.</Caption1>
      </Card>
    </main>
  );
}
