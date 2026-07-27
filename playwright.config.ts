import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  // Running Chrome instances in parallel on a dev machine causes real CPU
  // contention, which delays when animations actually attach to the
  // element. That races with the getAnimations() waits in a11y.spec.ts:
  // the check can run before the animation exists yet, so axe samples an
  // in-between paint frame and reports a false contrast violation. Serial
  // execution removes the race; this suite is small enough that the speed
  // cost doesn't matter.
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5180',
    // Scanning mid-animation samples partially-blended colors and
    // produces false contrast violations, so run the whole suite in the
    // settled state.
    contextOptions: {
      reducedMotion: 'reduce',
    },
  },
  projects: [
    {
      name: 'chromium',
      // Uses the system-installed Chrome rather than Playwright's bundled
      // Chromium — works around a macOS/bundled-Chromium incompatibility
      // and avoids needing `npx playwright install`.
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
  webServer: {
    // Dedicated port, not 5173 — this repo's normal `npm run dev` port —
    // so the sweep never accidentally reuses (or is blocked by) whatever
    // else happens to be running there.
    command: 'npm run dev -- --port 5180 --strictPort',
    url: 'http://localhost:5180',
    reuseExistingServer: false,
  },
})
