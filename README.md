# Playwright Codegen

## Getting started

To get started, first login to the domains that we're testing with the codegen `--save-storage=auth.json` option.

```
playwright codegen --save-storage=auth.json
```

Domains:

- https://www.vercel.com

## Recording new tests

To record a new test, run the following command:

```
playwright codegen --record --save-storage=auth.json
```

And copy the commands in the Playwright terminal into a new test file.

## Benchmark

**Chromium**

```
time playwright test --project=chromium tests/perf-benchmark.spec.ts

Running 1 test using 1 worker
[1/1] [chromium] › tests/perf-benchmark.spec.ts:5:6 › View Top paths
[replay.io]: 🕑 Completing some outstanding work ...
  1 passed (15.5s)
playwright test --project=chromium tests/perf-benchmark.spec.ts  27.96s user 3.84s system 192% cpu 16.481 total
```

**Replay Chromium**

```
time playwright test --project=replay-chromium tests/perf-benchmark.spec.ts

Running 1 test using 1 worker
[1/1] [replay-chromium] › tests/perf-benchmark.spec.ts:5:6 › View Top paths
[replay.io]: 🕑 Completing some outstanding work ...
  Slow test file: [replay-chromium] › tests/perf-benchmark.spec.ts (34.7s)
  Consider splitting slow test files to speed up parallel execution
  1 passed (35.5s)
playwright test --project=replay-chromium tests/perf-benchmark.spec.ts  74.36s user 8.61s system 228% cpu 36.307 total
```
