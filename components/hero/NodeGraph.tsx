"use client";

import { motion } from "framer-motion";

type Node = {
  id: string;
  x: number;
  y: number;
  r: number;
  tone: "amber" | "cyan" | "core";
  label?: string;
};

type Edge = {
  from: string;
  to: string;
  tone: "amber" | "cyan";
};

const nodes: Node[] = [
  { id: "ui", x: 60, y: 90, r: 7, tone: "amber", label: "UI" },
  { id: "api", x: 60, y: 210, r: 7, tone: "amber", label: "API" },
  { id: "db", x: 60, y: 330, r: 7, tone: "amber", label: "DB" },

  { id: "core", x: 260, y: 210, r: 13, tone: "core" },

  { id: "in1", x: 460, y: 70, r: 6, tone: "cyan" },
  { id: "in2", x: 460, y: 150, r: 6, tone: "cyan" },
  { id: "in3", x: 460, y: 230, r: 6, tone: "cyan" },
  { id: "in4", x: 460, y: 310, r: 6, tone: "cyan" },

  { id: "h1", x: 390, y: 110, r: 6, tone: "cyan" },
  { id: "h2", x: 390, y: 200, r: 6, tone: "cyan" },
  { id: "h3", x: 390, y: 290, r: 6, tone: "cyan" },
];

const edges: Edge[] = [
  { from: "ui", to: "api", tone: "amber" },
  { from: "api", to: "db", tone: "amber" },
  { from: "api", to: "core", tone: "amber" },
  { from: "ui", to: "core", tone: "amber" },

  { from: "core", to: "h1", tone: "cyan" },
  { from: "core", to: "h2", tone: "cyan" },
  { from: "core", to: "h3", tone: "cyan" },

  { from: "h1", to: "in1", tone: "cyan" },
  { from: "h1", to: "in2", tone: "cyan" },
  { from: "h2", to: "in2", tone: "cyan" },
  { from: "h2", to: "in3", tone: "cyan" },
  { from: "h3", to: "in3", tone: "cyan" },
  { from: "h3", to: "in4", tone: "cyan" },
];

function findNode(id: string) {
  return nodes.find((node) => node.id === id)!;
}

export default function NodeGraph() {
  return (
    <svg
      viewBox="0 0 520 400"
      role="img"
      aria-labelledby="nodegraph-title"
    >
      <title id="nodegraph-title">
        Diagram connecting a full-stack pipeline to an AI neural network
      </title>
      {/* Edges */}
      {edges.map((edge, i) => {
        const a = findNode(edge.from);
        const b = findNode(edge.to);

        const stroke =
          edge.tone === "amber"
            ? "var(--amber-line)"
            : "var(--cyan-line)";

        return (
          <motion.line
            key={`${edge.from}-${edge.to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={stroke}
            strokeWidth={1.4}
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15 + i * 0.045,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Traveling pulses */}
      <motion.circle
        r={2.4}
        fill="var(--amber)"
        initial={{
          offsetDistance: "0%",
          opacity: 0,
        }}
        animate={{
          offsetDistance: "100%",
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          repeatDelay: 1.1,
          ease: "linear",
        }}
        style={{
          offsetPath: 'path("M60,90 L60,210 L260,210")',
        }}
      />

      <motion.circle
        r={2.4}
        fill="var(--cyan)"
        initial={{
          offsetDistance: "0%",
          opacity: 0,
        }}
        animate={{
          offsetDistance: "100%",
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          repeatDelay: 1.6,
          delay: 0.6,
          ease: "linear",
        }}
        style={{
          offsetPath: 'path("M260,210 L390,200 L460,150")',
        }}
      />

      {/* Nodes */}
      {nodes.map((node, i) => {
        const fill =
          node.tone === "core"
            ? "var(--bg)"
            : node.tone === "amber"
              ? "var(--amber-soft)"
              : "var(--cyan-soft)";

        const stroke =
          node.tone === "core"
            ? "url(#coreGrad)"
            : node.tone === "amber"
              ? "var(--amber)"
              : "var(--cyan)";

        return (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={fill}
              stroke={stroke}
              strokeWidth={node.tone === "core" ? 2.5 : 1.6}
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5 + i * 0.05,
                ease: "backOut",
              }}
            />

            {node.label && (
              <text
                x={node.x}
                y={node.y - 16}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="10"
                fill="var(--text-faint)"
              >
                {node.label}
              </text>
            )}
          </g>
        );
      })}

      {/* Core label */}
      <text
        x={260}
        y={215}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fontWeight={600}
        fill="var(--text)"
      >
        SK
      </text>

      <defs>
        <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--amber)" />
          <stop offset="100%" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>
    </svg>
  );
}