#!/usr/bin/env node
// token-lint — generated for Juan Gomez Vara. Do not hand-edit the MAP.
// Usage: node checkers/token-lint.mjs [file ...]        flag hex/px that already have a token (stdin if no files)
//        node checkers/token-lint.mjs --check-version [--css path/to/variables.css]
//                                                       is this package the system variables.css ships?
// Linting also warns (without failing) when the repo's variables.css is another version.

const MAP = [
  {
    "needle": "#e2e5e6",
    "token": "Content/primary",
    "css": "var(--color-content-primary)"
  },
  {
    "needle": "#c8cdcf",
    "token": "Content/secondary",
    "css": "var(--color-content-secondary)"
  },
  {
    "needle": "#5e6467",
    "token": "Content/subtle",
    "css": "var(--color-content-subtle)"
  },
  {
    "needle": "#a0d2f3",
    "token": "Content/accent",
    "css": "var(--color-content-accent)"
  },
  {
    "needle": "#0d1012",
    "token": "Content/inverse",
    "css": "var(--color-content-inverse)"
  },
  {
    "needle": "#6c7173",
    "token": "Content/disabled",
    "css": "var(--color-content-disabled)"
  },
  {
    "needle": "#cbe9fc",
    "token": "Content/link/hover",
    "css": "var(--color-content-link-hover)"
  },
  {
    "needle": "#005b83",
    "token": "Action/primary/default",
    "css": "var(--color-action-primary-default)"
  },
  {
    "needle": "#2b678a",
    "token": "Action/primary/hover",
    "css": "var(--color-action-primary-hover)"
  },
  {
    "needle": "#134a67",
    "token": "Action/primary/pressed",
    "css": "var(--color-action-primary-pressed)"
  },
  {
    "needle": "#212223",
    "token": "Action/secondary/default",
    "css": "var(--color-action-secondary-default)"
  },
  {
    "needle": "#292a2b",
    "token": "Action/secondary/hover",
    "css": "var(--color-action-secondary-hover)"
  },
  {
    "needle": "#343637",
    "token": "Action/secondary/pressed",
    "css": "var(--color-action-secondary-pressed)"
  },
  {
    "needle": "#ffffff26",
    "token": "Action/disabled/default",
    "css": "var(--color-action-disabled-default)"
  },
  {
    "needle": "#ffffff00",
    "token": "Action/ghost/default",
    "css": "var(--color-action-ghost-default)"
  },
  {
    "needle": "#ffffff0d",
    "token": "Action/ghost/hover",
    "css": "var(--color-action-ghost-hover)"
  },
  {
    "needle": "#ffffff1a",
    "token": "Action/ghost/pressed",
    "css": "var(--color-action-ghost-pressed)"
  },
  {
    "needle": "#151515",
    "token": "Surface/layer-1",
    "css": "var(--color-surface-layer-1)"
  },
  {
    "needle": "#1b1b1c",
    "token": "Surface/layer-2",
    "css": "var(--color-surface-layer-2)"
  },
  {
    "needle": "#121517",
    "token": "Surface/accent",
    "css": "var(--color-surface-accent)"
  },
  {
    "needle": "#82b7eb0f",
    "token": "Surface/selected",
    "css": "var(--color-surface-selected)"
  },
  {
    "needle": "#54bbfe24",
    "token": "Surface/selected-pressed",
    "css": "var(--color-surface-selected-pressed)"
  },
  {
    "needle": "#00000099",
    "token": "Surface/overlay",
    "css": "var(--color-surface-overlay)"
  },
  {
    "needle": "#f67c5d1f",
    "token": "Status/critical/surface",
    "css": "var(--color-status-critical-surface)"
  },
  {
    "needle": "#f67b6345",
    "token": "Status/critical/surface-pressed",
    "css": "var(--color-status-critical-surface-pressed)"
  },
  {
    "needle": "#85433b",
    "token": "Status/critical/surface-solid",
    "css": "var(--color-status-critical-surface-solid)"
  },
  {
    "needle": "#683832",
    "token": "Status/critical/surface-solid-hover",
    "css": "var(--color-status-critical-surface-solid-hover)"
  },
  {
    "needle": "#4c2d28",
    "token": "Status/critical/surface-solid-pressed",
    "css": "var(--color-status-critical-surface-solid-pressed)"
  },
  {
    "needle": "#ffbcb0",
    "token": "Status/critical/content",
    "css": "var(--color-status-critical-content)"
  },
  {
    "needle": "#fc796661",
    "token": "Status/critical/border",
    "css": "var(--color-status-critical-border)"
  },
  {
    "needle": "#b4ee9717",
    "token": "Status/success/surface",
    "css": "var(--color-status-success-surface)"
  },
  {
    "needle": "#8ef5a636",
    "token": "Status/success/surface-pressed",
    "css": "var(--color-status-success-surface-pressed)"
  },
  {
    "needle": "#96dbae",
    "token": "Status/success/surface-solid",
    "css": "var(--color-status-success-surface-solid)"
  },
  {
    "needle": "#c6eed3",
    "token": "Status/success/surface-solid-hover",
    "css": "var(--color-status-success-surface-solid-hover)"
  },
  {
    "needle": "#66b886",
    "token": "Status/success/surface-solid-pressed",
    "css": "var(--color-status-success-surface-solid-pressed)"
  },
  {
    "needle": "#85f9a84d",
    "token": "Status/success/border",
    "css": "var(--color-status-success-border)"
  },
  {
    "needle": "#f4a25f21",
    "token": "Status/warning/surface",
    "css": "var(--color-status-warning-surface)"
  },
  {
    "needle": "#fcad6847",
    "token": "Status/warning/surface-pressed",
    "css": "var(--color-status-warning-surface-pressed)"
  },
  {
    "needle": "#f0aa6c",
    "token": "Status/warning/surface-solid",
    "css": "var(--color-status-warning-surface-solid)"
  },
  {
    "needle": "#fcc08c",
    "token": "Status/warning/surface-solid-hover",
    "css": "var(--color-status-warning-surface-solid-hover)"
  },
  {
    "needle": "#ffdfc1",
    "token": "Status/warning/surface-solid-pressed",
    "css": "var(--color-status-warning-surface-solid-pressed)"
  },
  {
    "needle": "#faa76269",
    "token": "Status/warning/border",
    "css": "var(--color-status-warning-border)"
  },
  {
    "needle": "#8cb4ec1c",
    "token": "Status/info/surface",
    "css": "var(--color-status-info-surface)"
  },
  {
    "needle": "#79b4fe40",
    "token": "Status/info/surface-pressed",
    "css": "var(--color-status-info-surface-pressed)"
  },
  {
    "needle": "#9fd1ff",
    "token": "Status/info/surface-solid",
    "css": "var(--color-status-info-surface-solid)"
  },
  {
    "needle": "#cbe8ff",
    "token": "Status/info/surface-solid-hover",
    "css": "var(--color-status-info-surface-solid-hover)"
  },
  {
    "needle": "#68a1e5",
    "token": "Status/info/surface-solid-pressed",
    "css": "var(--color-status-info-surface-solid-pressed)"
  },
  {
    "needle": "#6cabfa61",
    "token": "Status/info/border",
    "css": "var(--color-status-info-border)"
  },
  {
    "needle": "#ffffff66",
    "token": "Border/control",
    "css": "var(--color-border-control)"
  },
  {
    "needle": "#ffffff80",
    "token": "Border/control-hover",
    "css": "var(--color-border-control-hover)"
  },
  {
    "needle": "#ffffff99",
    "token": "Border/strong",
    "css": "var(--color-border-strong)"
  },
  {
    "needle": "#41b2f736",
    "token": "Border/ring/default",
    "css": "var(--color-border-ring-default)"
  },
  {
    "needle": "#ffffff",
    "token": "content-inverse",
    "css": "var(--color-content-inverse)"
  },
  {
    "needle": "#141a1f",
    "token": "background-brand-secondary",
    "css": "var(--color-background-brand-secondary)"
  },
  {
    "needle": "#1c1615",
    "token": "background-error-primary",
    "css": "var(--color-background-error-primary)"
  },
  {
    "needle": "#a85046",
    "token": "background-error-solid",
    "css": "var(--color-background-error-solid)"
  },
  {
    "needle": "#1d1916",
    "token": "background-warning-primary",
    "css": "var(--color-background-warning-primary)"
  },
  {
    "needle": "#8e623b",
    "token": "background-warning-solid",
    "css": "var(--color-background-warning-solid)"
  },
  {
    "needle": "#161a17",
    "token": "background-success-primary",
    "css": "var(--color-background-success-primary)"
  },
  {
    "needle": "#386c4d",
    "token": "background-success-solid",
    "css": "var(--color-background-success-solid)"
  },
  {
    "needle": "#fcfeff",
    "token": "juan-gomez-vara-1",
    "css": "var(--color-juan-gomez-vara-1)"
  },
  {
    "needle": "#ebf0f3",
    "token": "juan-gomez-vara-2",
    "css": "var(--color-juan-gomez-vara-2)"
  },
  {
    "needle": "#d9e2e8",
    "token": "juan-gomez-vara-3",
    "css": "var(--color-juan-gomez-vara-3)"
  },
  {
    "needle": "#c5d3dc",
    "token": "juan-gomez-vara-4",
    "css": "var(--color-juan-gomez-vara-4)"
  },
  {
    "needle": "#aec2d0",
    "token": "juan-gomez-vara-5",
    "css": "var(--color-juan-gomez-vara-5)"
  },
  {
    "needle": "#8eabbf",
    "token": "juan-gomez-vara-6",
    "css": "var(--color-juan-gomez-vara-6)"
  },
  {
    "needle": "#6d95ae",
    "token": "juan-gomez-vara-7",
    "css": "var(--color-juan-gomez-vara-7)"
  },
  {
    "needle": "#487c9b",
    "token": "juan-gomez-vara-8",
    "css": "var(--color-juan-gomez-vara-8)"
  },
  {
    "needle": "#0a4e6f",
    "token": "juan-gomez-vara-10",
    "css": "var(--color-juan-gomez-vara-10)"
  },
  {
    "needle": "#41718f",
    "token": "juan-gomez-vara-11",
    "css": "var(--color-juan-gomez-vara-11)"
  },
  {
    "needle": "#203848",
    "token": "juan-gomez-vara-12",
    "css": "var(--color-juan-gomez-vara-12)"
  },
  {
    "needle": "#162128",
    "token": "juan-gomez-vara-dark-4",
    "css": "var(--color-juan-gomez-vara-dark-4)"
  },
  {
    "needle": "#172833",
    "token": "juan-gomez-vara-dark-5",
    "css": "var(--color-juan-gomez-vara-dark-5)"
  },
  {
    "needle": "#183242",
    "token": "juan-gomez-vara-dark-6",
    "css": "var(--color-juan-gomez-vara-dark-6)"
  },
  {
    "needle": "#173d53",
    "token": "juan-gomez-vara-dark-7",
    "css": "var(--color-juan-gomez-vara-dark-7)"
  },
  {
    "needle": "#f1f2f3",
    "token": "juan-gomez-vara-gray-2",
    "css": "var(--color-juan-gomez-vara-gray-2)"
  },
  {
    "needle": "#e5e7e8",
    "token": "juan-gomez-vara-gray-3",
    "css": "var(--color-juan-gomez-vara-gray-3)"
  },
  {
    "needle": "#d8dbdc",
    "token": "juan-gomez-vara-gray-4",
    "css": "var(--color-juan-gomez-vara-gray-4)"
  },
  {
    "needle": "#c9cdcf",
    "token": "juan-gomez-vara-gray-5",
    "css": "var(--color-juan-gomez-vara-gray-5)"
  },
  {
    "needle": "#b4babd",
    "token": "juan-gomez-vara-gray-6",
    "css": "var(--color-juan-gomez-vara-gray-6)"
  },
  {
    "needle": "#a0a8ac",
    "token": "juan-gomez-vara-gray-7",
    "css": "var(--color-juan-gomez-vara-gray-7)"
  },
  {
    "needle": "#899398",
    "token": "juan-gomez-vara-gray-8",
    "css": "var(--color-juan-gomez-vara-gray-8)"
  },
  {
    "needle": "#6c797f",
    "token": "juan-gomez-vara-gray-9",
    "css": "var(--color-juan-gomez-vara-gray-9)"
  },
  {
    "needle": "#616c71",
    "token": "juan-gomez-vara-gray-10",
    "css": "var(--color-juan-gomez-vara-gray-10)"
  },
  {
    "needle": "#656e73",
    "token": "juan-gomez-vara-gray-11",
    "css": "var(--color-juan-gomez-vara-gray-11)"
  },
  {
    "needle": "#323639",
    "token": "juan-gomez-vara-gray-12",
    "css": "var(--color-juan-gomez-vara-gray-12)"
  },
  {
    "needle": "#3f4244",
    "token": "juan-gomez-vara-gray-dark-7",
    "css": "var(--color-juan-gomez-vara-gray-dark-7)"
  },
  {
    "needle": "#4c5153",
    "token": "juan-gomez-vara-gray-dark-8",
    "css": "var(--color-juan-gomez-vara-gray-dark-8)"
  },
  {
    "needle": "#fbf2f0",
    "token": "juan-gomez-vara-error-2",
    "css": "var(--color-juan-gomez-vara-error-2)"
  },
  {
    "needle": "#f8e6e3",
    "token": "juan-gomez-vara-error-3",
    "css": "var(--color-juan-gomez-vara-error-3)"
  },
  {
    "needle": "#f5d8d4",
    "token": "juan-gomez-vara-error-4",
    "css": "var(--color-juan-gomez-vara-error-4)"
  },
  {
    "needle": "#f2c9c3",
    "token": "juan-gomez-vara-error-5",
    "css": "var(--color-juan-gomez-vara-error-5)"
  },
  {
    "needle": "#eeb4ab",
    "token": "juan-gomez-vara-error-6",
    "css": "var(--color-juan-gomez-vara-error-6)"
  },
  {
    "needle": "#e99e93",
    "token": "juan-gomez-vara-error-7",
    "css": "var(--color-juan-gomez-vara-error-7)"
  },
  {
    "needle": "#e38478",
    "token": "juan-gomez-vara-error-8",
    "css": "var(--color-juan-gomez-vara-error-8)"
  },
  {
    "needle": "#d96053",
    "token": "juan-gomez-vara-error-9",
    "css": "var(--color-juan-gomez-vara-error-9)"
  },
  {
    "needle": "#c05b4f",
    "token": "juan-gomez-vara-error-10",
    "css": "var(--color-juan-gomez-vara-error-10)"
  },
  {
    "needle": "#a75349",
    "token": "juan-gomez-vara-error-11",
    "css": "var(--color-juan-gomez-vara-error-11)"
  },
  {
    "needle": "#552924",
    "token": "juan-gomez-vara-error-12",
    "css": "var(--color-juan-gomez-vara-error-12)"
  },
  {
    "needle": "#291d1b",
    "token": "juan-gomez-vara-error-dark-3",
    "css": "var(--color-juan-gomez-vara-error-dark-3)"
  },
  {
    "needle": "#392421",
    "token": "juan-gomez-vara-error-dark-4",
    "css": "var(--color-juan-gomez-vara-error-dark-4)"
  },
  {
    "needle": "#de776a",
    "token": "juan-gomez-vara-error-dark-10",
    "css": "var(--color-juan-gomez-vara-error-dark-10)"
  },
  {
    "needle": "#ffddd5",
    "token": "juan-gomez-vara-error-dark-12",
    "css": "var(--color-juan-gomez-vara-error-dark-12)"
  },
  {
    "needle": "#fcf6f1",
    "token": "juan-gomez-vara-warning-2",
    "css": "var(--color-juan-gomez-vara-warning-2)"
  },
  {
    "needle": "#faeee5",
    "token": "juan-gomez-vara-warning-3",
    "css": "var(--color-juan-gomez-vara-warning-3)"
  },
  {
    "needle": "#f8e5d6",
    "token": "juan-gomez-vara-warning-4",
    "css": "var(--color-juan-gomez-vara-warning-4)"
  },
  {
    "needle": "#f6dbc6",
    "token": "juan-gomez-vara-warning-5",
    "css": "var(--color-juan-gomez-vara-warning-5)"
  },
  {
    "needle": "#f3cdae",
    "token": "juan-gomez-vara-warning-6",
    "css": "var(--color-juan-gomez-vara-warning-6)"
  },
  {
    "needle": "#f1bf95",
    "token": "juan-gomez-vara-warning-7",
    "css": "var(--color-juan-gomez-vara-warning-7)"
  },
  {
    "needle": "#edaf78",
    "token": "juan-gomez-vara-warning-8",
    "css": "var(--color-juan-gomez-vara-warning-8)"
  },
  {
    "needle": "#e9984b",
    "token": "juan-gomez-vara-warning-9",
    "css": "var(--color-juan-gomez-vara-warning-9)"
  },
  {
    "needle": "#d28e50",
    "token": "juan-gomez-vara-warning-10",
    "css": "var(--color-juan-gomez-vara-warning-10)"
  },
  {
    "needle": "#95602d",
    "token": "juan-gomez-vara-warning-11",
    "css": "var(--color-juan-gomez-vara-warning-11)"
  },
  {
    "needle": "#4b2f16",
    "token": "juan-gomez-vara-warning-12",
    "css": "var(--color-juan-gomez-vara-warning-12)"
  },
  {
    "needle": "#2b231c",
    "token": "juan-gomez-vara-warning-dark-3",
    "css": "var(--color-juan-gomez-vara-warning-dark-3)"
  },
  {
    "needle": "#3c2e23",
    "token": "juan-gomez-vara-warning-dark-4",
    "css": "var(--color-juan-gomez-vara-warning-dark-4)"
  },
  {
    "needle": "#503c2a",
    "token": "juan-gomez-vara-warning-dark-5",
    "css": "var(--color-juan-gomez-vara-warning-dark-5)"
  },
  {
    "needle": "#6e4e33",
    "token": "juan-gomez-vara-warning-dark-6",
    "css": "var(--color-juan-gomez-vara-warning-dark-6)"
  },
  {
    "needle": "#b47943",
    "token": "juan-gomez-vara-warning-dark-8",
    "css": "var(--color-juan-gomez-vara-warning-dark-8)"
  },
  {
    "needle": "#f1f7f3",
    "token": "juan-gomez-vara-success-2",
    "css": "var(--color-juan-gomez-vara-success-2)"
  },
  {
    "needle": "#e4f0e8",
    "token": "juan-gomez-vara-success-3",
    "css": "var(--color-juan-gomez-vara-success-3)"
  },
  {
    "needle": "#d5e9db",
    "token": "juan-gomez-vara-success-4",
    "css": "var(--color-juan-gomez-vara-success-4)"
  },
  {
    "needle": "#c5e1cd",
    "token": "juan-gomez-vara-success-5",
    "css": "var(--color-juan-gomez-vara-success-5)"
  },
  {
    "needle": "#add5ba",
    "token": "juan-gomez-vara-success-6",
    "css": "var(--color-juan-gomez-vara-success-6)"
  },
  {
    "needle": "#94caa6",
    "token": "juan-gomez-vara-success-7",
    "css": "var(--color-juan-gomez-vara-success-7)"
  },
  {
    "needle": "#75be90",
    "token": "juan-gomez-vara-success-8",
    "css": "var(--color-juan-gomez-vara-success-8)"
  },
  {
    "needle": "#47ad73",
    "token": "juan-gomez-vara-success-9",
    "css": "var(--color-juan-gomez-vara-success-9)"
  },
  {
    "needle": "#4a9c6b",
    "token": "juan-gomez-vara-success-10",
    "css": "var(--color-juan-gomez-vara-success-10)"
  },
  {
    "needle": "#367851",
    "token": "juan-gomez-vara-success-11",
    "css": "var(--color-juan-gomez-vara-success-11)"
  },
  {
    "needle": "#1b3c28",
    "token": "juan-gomez-vara-success-12",
    "css": "var(--color-juan-gomez-vara-success-12)"
  },
  {
    "needle": "#1c241e",
    "token": "juan-gomez-vara-success-dark-3",
    "css": "var(--color-juan-gomez-vara-success-dark-3)"
  },
  {
    "needle": "#223127",
    "token": "juan-gomez-vara-success-dark-4",
    "css": "var(--color-juan-gomez-vara-success-dark-4)"
  },
  {
    "needle": "#284031",
    "token": "juan-gomez-vara-success-dark-5",
    "css": "var(--color-juan-gomez-vara-success-dark-5)"
  },
  {
    "needle": "#31563f",
    "token": "juan-gomez-vara-success-dark-6",
    "css": "var(--color-juan-gomez-vara-success-dark-6)"
  },
  {
    "needle": "#40885d",
    "token": "juan-gomez-vara-success-dark-8",
    "css": "var(--color-juan-gomez-vara-success-dark-8)"
  },
  {
    "needle": "#f0f5fb",
    "token": "juan-gomez-vara-info-2",
    "css": "var(--color-juan-gomez-vara-info-2)"
  },
  {
    "needle": "#e3ecf8",
    "token": "juan-gomez-vara-info-3",
    "css": "var(--color-juan-gomez-vara-info-3)"
  },
  {
    "needle": "#d4e3f5",
    "token": "juan-gomez-vara-info-4",
    "css": "var(--color-juan-gomez-vara-info-4)"
  },
  {
    "needle": "#c3d8f2",
    "token": "juan-gomez-vara-info-5",
    "css": "var(--color-juan-gomez-vara-info-5)"
  },
  {
    "needle": "#abc9ef",
    "token": "juan-gomez-vara-info-6",
    "css": "var(--color-juan-gomez-vara-info-6)"
  },
  {
    "needle": "#93baeb",
    "token": "juan-gomez-vara-info-7",
    "css": "var(--color-juan-gomez-vara-info-7)"
  },
  {
    "needle": "#76a9e7",
    "token": "juan-gomez-vara-info-8",
    "css": "var(--color-juan-gomez-vara-info-8)"
  },
  {
    "needle": "#4e92e2",
    "token": "juan-gomez-vara-info-9",
    "css": "var(--color-juan-gomez-vara-info-9)"
  },
  {
    "needle": "#4d85c7",
    "token": "juan-gomez-vara-info-10",
    "css": "var(--color-juan-gomez-vara-info-10)"
  },
  {
    "needle": "#416ea5",
    "token": "juan-gomez-vara-info-11",
    "css": "var(--color-juan-gomez-vara-info-11)"
  },
  {
    "needle": "#1f3753",
    "token": "juan-gomez-vara-info-12",
    "css": "var(--color-juan-gomez-vara-info-12)"
  },
  {
    "needle": "#15181c",
    "token": "juan-gomez-vara-info-dark-2",
    "css": "var(--color-juan-gomez-vara-info-dark-2)"
  },
  {
    "needle": "#1b222a",
    "token": "juan-gomez-vara-info-dark-3",
    "css": "var(--color-juan-gomez-vara-info-dark-3)"
  },
  {
    "needle": "#212c3a",
    "token": "juan-gomez-vara-info-dark-4",
    "css": "var(--color-juan-gomez-vara-info-dark-4)"
  },
  {
    "needle": "#28394d",
    "token": "juan-gomez-vara-info-dark-5",
    "css": "var(--color-juan-gomez-vara-info-dark-5)"
  },
  {
    "needle": "#314b6a",
    "token": "juan-gomez-vara-info-dark-6",
    "css": "var(--color-juan-gomez-vara-info-dark-6)"
  },
  {
    "needle": "#3a5e89",
    "token": "juan-gomez-vara-info-dark-7",
    "css": "var(--color-juan-gomez-vara-info-dark-7)"
  },
  {
    "needle": "#4374ae",
    "token": "juan-gomez-vara-info-dark-8",
    "css": "var(--color-juan-gomez-vara-info-dark-8)"
  },
  {
    "needle": "0px",
    "token": "Spacing/0",
    "css": "var(--spacing-0)"
  },
  {
    "needle": "4px",
    "token": "Spacing/1",
    "css": "var(--spacing-1)"
  },
  {
    "needle": "8px",
    "token": "Spacing/2",
    "css": "var(--spacing-2)"
  },
  {
    "needle": "12px",
    "token": "Spacing/3",
    "css": "var(--spacing-3)"
  },
  {
    "needle": "16px",
    "token": "Spacing/4",
    "css": "var(--spacing-4)"
  },
  {
    "needle": "20px",
    "token": "Spacing/5",
    "css": "var(--spacing-5)"
  },
  {
    "needle": "24px",
    "token": "Spacing/6",
    "css": "var(--spacing-6)"
  },
  {
    "needle": "32px",
    "token": "Spacing/8",
    "css": "var(--spacing-8)"
  },
  {
    "needle": "40px",
    "token": "Spacing/10",
    "css": "var(--spacing-10)"
  },
  {
    "needle": "48px",
    "token": "Spacing/12",
    "css": "var(--spacing-12)"
  },
  {
    "needle": "64px",
    "token": "Spacing/16",
    "css": "var(--spacing-16)"
  },
  {
    "needle": "96px",
    "token": "Spacing/24",
    "css": "var(--spacing-24)"
  },
  {
    "needle": "128px",
    "token": "Spacing/32",
    "css": "var(--spacing-32)"
  },
  {
    "needle": "2px",
    "token": "Spacing/0_5",
    "css": "var(--spacing-0_5)"
  },
  {
    "needle": "6px",
    "token": "Spacing/1_5",
    "css": "var(--spacing-1_5)"
  },
  {
    "needle": "10px",
    "token": "Spacing/2_5",
    "css": "var(--spacing-2_5)"
  },
  {
    "needle": "9999px",
    "token": "full",
    "css": "var(--radius-full)"
  },
  {
    "needle": "56px",
    "token": "xl",
    "css": "var(--size-xl)"
  }
]

const STAMP = {"project":"Juan Gomez Vara","schemaVersion":7,"generated":"2026-10-20","fingerprint":"12d488b04ac803"}

// The values variables.css resolves on :root for the system this package was generated from.
const EXPECT = {
  "--color-content-primary": "#e2e5e6",
  "--color-content-secondary": "#c8cdcf",
  "--color-content-subtle": "#5e6467",
  "--color-content-accent": "#a0d2f3",
  "--color-content-on-action": "#e2e5e6",
  "--color-content-inverse": "#0d1012",
  "--color-content-disabled": "#6c7173",
  "--color-content-link-default": "#a0d2f3",
  "--color-content-link-hover": "#cbe9fc",
  "--color-action-primary-default": "#005b83",
  "--color-action-primary-hover": "#2b678a",
  "--color-action-primary-pressed": "#134a67",
  "--color-action-secondary-default": "#212223",
  "--color-action-secondary-hover": "#292a2b",
  "--color-action-secondary-pressed": "#343637",
  "--color-action-disabled-default": "#ffffff26",
  "--color-action-ghost-default": "#ffffff00",
  "--color-action-ghost-hover": "#ffffff0d",
  "--color-action-ghost-pressed": "#ffffff1a",
  "--color-surface-page": "#0d1012",
  "--color-surface-layer-1": "#151515",
  "--color-surface-layer-2": "#1b1b1c",
  "--color-surface-accent": "#121517",
  "--color-surface-input": "#0d1012",
  "--color-surface-selected": "#82b7eb0f",
  "--color-surface-selected-pressed": "#54bbfe24",
  "--color-surface-inverse": "#c8cdcf",
  "--color-surface-overlay": "#00000099",
  "--color-status-critical-surface": "#f67c5d1f",
  "--color-status-critical-surface-pressed": "#f67b6345",
  "--color-status-critical-surface-solid": "#85433b",
  "--color-status-critical-surface-solid-hover": "#683832",
  "--color-status-critical-surface-solid-pressed": "#4c2d28",
  "--color-status-critical-on-solid": "#e2e5e6",
  "--color-status-critical-content": "#ffbcb0",
  "--color-status-critical-border": "#fc796661",
  "--color-status-critical-border-strong": "#ffbcb0",
  "--color-status-success-surface": "#b4ee9717",
  "--color-status-success-surface-pressed": "#8ef5a636",
  "--color-status-success-surface-solid": "#96dbae",
  "--color-status-success-surface-solid-hover": "#c6eed3",
  "--color-status-success-surface-solid-pressed": "#66b886",
  "--color-status-success-on-solid": "#0d1012",
  "--color-status-success-content": "#96dbae",
  "--color-status-success-border": "#85f9a84d",
  "--color-status-success-border-strong": "#66b886",
  "--color-status-warning-surface": "#f4a25f21",
  "--color-status-warning-surface-pressed": "#fcad6847",
  "--color-status-warning-surface-solid": "#f0aa6c",
  "--color-status-warning-surface-solid-hover": "#fcc08c",
  "--color-status-warning-surface-solid-pressed": "#ffdfc1",
  "--color-status-warning-on-solid": "#0d1012",
  "--color-status-warning-content": "#fcc08c",
  "--color-status-warning-border": "#faa76269",
  "--color-status-warning-border-strong": "#fcc08c",
  "--color-status-info-surface": "#8cb4ec1c",
  "--color-status-info-surface-pressed": "#79b4fe40",
  "--color-status-info-surface-solid": "#9fd1ff",
  "--color-status-info-surface-solid-hover": "#cbe8ff",
  "--color-status-info-surface-solid-pressed": "#68a1e5",
  "--color-status-info-on-solid": "#0d1012",
  "--color-status-info-content": "#9fd1ff",
  "--color-status-info-border": "#6cabfa61",
  "--color-status-info-border-strong": "#68a1e5",
  "--color-border-default": "#ffffff26",
  "--color-border-subtle": "#ffffff1a",
  "--color-border-control": "#ffffff66",
  "--color-border-control-hover": "#ffffff80",
  "--color-border-strong": "#ffffff99",
  "--color-border-accent": "#134a67",
  "--color-border-focus": "#a0d2f3",
  "--color-border-ring-default": "#41b2f736",
  "--color-border-rim-highlight": "#ffffff0d",
  "--spacing-0": "0px",
  "--spacing-1": "4px",
  "--spacing-2": "8px",
  "--spacing-3": "12px",
  "--spacing-4": "16px",
  "--spacing-5": "20px",
  "--spacing-6": "24px",
  "--spacing-8": "32px",
  "--spacing-10": "40px",
  "--spacing-12": "48px",
  "--spacing-16": "64px",
  "--spacing-24": "96px",
  "--spacing-32": "128px",
  "--spacing-0_5": "2px",
  "--spacing-1_5": "6px",
  "--spacing-2_5": "10px",
  "--radius-none": "0px",
  "--radius-full": "9999px",
  "--radius-sm": "4px",
  "--radius-lg": "8px",
  "--radius-xl": "12px",
  "--radius-2xl": "16px",
  "--radius-3xl": "24px",
  "--radius-4xl": "32px",
  "--radius-5xl": "48px",
  "--radius-xs": "2px",
  "--radius-md": "6px",
  "--size-xs": "24px",
  "--size-sm": "32px",
  "--size-md": "40px",
  "--size-lg": "48px",
  "--size-xl": "56px",
  "--size-2xl": "64px"
}

const HEX = /#(?:[0-9a-fA-F]{3,8})\b/g
const PX = /\b\d+px\b/g

function lookup(raw) {
  const needle = raw.toLowerCase()
  return MAP.find((e) => e.needle.toLowerCase() === needle)
}

function lint(source, label) {
  const hits = []
  for (const re of [HEX, PX]) {
    re.lastIndex = 0
    let m
    while ((m = re.exec(source))) {
      const entry = lookup(m[0])
      if (entry) hits.push({ value: m[0], token: entry.token, css: entry.css, index: m.index })
    }
  }
  for (const h of hits) {
    console.log(label + ':' + h.index + '  ' + h.value + '  →  ' + h.css + '  (' + h.token + ')')
  }
  return hits.length
}

async function read(path) {
  const { readFile } = await import('node:fs/promises')
  return readFile(path, 'utf8')
}

// ── Version check ──────────────────────────────────────────────────────────

const CSS_CANDIDATES = ['variables.css', 'src/variables.css', 'src/styles/variables.css', 'styles/variables.css', 'app/variables.css']

function rootDeclarations(css) {
  const start = css.indexOf(':root {')
  if (start < 0) return {}
  const body = css.slice(start, css.indexOf('\n}', start)).replace(/\/\*[\s\S]*?\*\//g, '')
  const out = {}
  for (const m of body.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) out[m[1]] = m[2].trim()
  return out
}

function resolve(decls, name) {
  let value = decls[name]
  for (let i = 0; i < 8 && value; i++) {
    const m = /^var\((--[\w-]+)(?:\s*,[^)]*)?\)$/.exec(value)
    if (!m) break
    value = decls[m[1]]
  }
  return value === undefined ? undefined : value.toLowerCase()
}

/** Tokens whose value in this variables.css is not the one the package was written for. */
export function versionDrift(css) {
  const decls = rootDeclarations(css)
  const drift = []
  for (const [name, want] of Object.entries(EXPECT)) {
    const got = resolve(decls, name)
    if (got !== want) drift.push({ name, want, got: got ?? 'missing' })
  }
  return drift
}

async function findCss(explicit) {
  const { existsSync } = await import('node:fs')
  if (explicit) return existsSync(explicit) ? explicit : null
  return CSS_CANDIDATES.find((p) => existsSync(p)) ?? null
}

async function checkVersion(explicit, loud) {
  const path = await findCss(explicit)
  if (!path) {
    if (loud) console.error('No variables.css found. Pass --css <path>.')
    return loud ? 2 : 0
  }
  const drift = versionDrift(await read(path))
  const stamp = STAMP ? ' (generated ' + STAMP.generated + ', fingerprint ' + STAMP.fingerprint + ')' : ''
  if (!drift.length) {
    if (loud) console.log(path + ' matches this package' + stamp + '.')
    return 0
  }
  console.error('This package is from another version of Juan Gomez Vara than ' + path + stamp + ': ' + drift.length + ' token(s) differ.')
  for (const d of drift.slice(0, loud ? 50 : 5)) console.error('  ' + d.name + '  package ' + d.want + '  css ' + d.got)
  console.error('Export the package again from Escala (or push to GitHub) so it matches.')
  return 1
}

const args = process.argv.slice(2)
const cssAt = args.indexOf('--css')
const cssPath = cssAt >= 0 ? args[cssAt + 1] : undefined
const files = args.filter((a, i) => !a.startsWith('--') && (cssAt < 0 || i !== cssAt + 1))
if (args.includes('--check-version')) process.exit(await checkVersion(cssPath, true))
await checkVersion(cssPath, false)
let total = 0
if (files.length === 0) {
  const chunks = []
  for await (const c of process.stdin) chunks.push(c)
  total += lint(chunks.join(''), 'stdin')
} else {
  for (const f of files) total += lint(await read(f), f)
}
if (total) {
  console.error(total + ' leftover value(s) already have a token in Juan Gomez Vara.')
  process.exit(1)
}
