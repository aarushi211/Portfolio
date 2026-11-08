
"use client";

import { useState } from "react";

export default function TurtleDemo() {
    const [run, setRun] = useState(0);
    const started = run > 0;

    return (
        <div className="turtle-demo">
            <div className="turtle-demo-top">
                <div>
                    <strong>My first kind of coding experiment</strong>
                    <p>
                        Give the turtle instructions and see what happens.
                    </p>
                </div>

                <button
                    type="button"
                    className="turtle-run"
                    onClick={() => setRun((n) => n + 1)}
                >
                    {started ? "↻ Run Again" : "▶ Run"}
                </button>
            </div>

            <div className="turtle-demo-body">
                {/* Code panel */}
                <div className="turtle-code">
                    <div className="turtle-code-header">
                        turtle.py
                    </div>

                    <pre>
                        <code>{`from turtle import *

for i in range(4):
    forward(100)
    right(90)`}</code>
                    </pre>
                </div>

                {/* Drawing panel */}
                <div className="turtle-canvas">
                    {started ? (
                        <svg
                            key={run}
                            viewBox="0 0 240 200"
                            role="img"
                            aria-label="Animated turtle drawing a square"
                        >
                            <path
                                className="turtle-path"
                                d="M70 45 H170 V145 H70 V45"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeDasharray="400"
                                strokeDashoffset="400"
                            />

                            <g className="turtle-marker">
                                <text
                                    x="0"
                                    y="0"
                                    fontSize="24"
                                    textAnchor="middle"
                                    dominantBaseline="central"
                                >
                                    🐢
                                </text>
                            </g>
                        </svg>
                    ) : (
                        <div className="turtle-placeholder">
                            <span>🐢</span>
                            <p>Click Run to draw a square!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
