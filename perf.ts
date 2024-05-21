import { $ } from "bun";

async function benchmark(
  mapsDisabled: string,
  assertsDisabled: string,
  project: string
) {
  console.log({ mapsDisabled, assertsDisabled, project });
  const times: number[] = [];
  for (let i = 0; i < 5; i++) {
    const start = Date.now();

    await $`RECORD_REPLAY_DISABLE_SOURCEMAP_COLLECTION=${mapsDisabled} RECORD_REPLAY_DISABLE_ASSERTS=${assertsDisabled} playwright test --project=${project} tests/perf-benchmark.spec.ts `.nothrow();
    //   .quiet()

    const duration = Date.now() - start;
    const seconds = Math.round(duration / 1000);

    console.log(`${seconds}s`);

    if (seconds != 300) {
      times.push(seconds);
    }
  }
  console.log(times);
  const avg = times.reduce((a, b) => a + b, 0) / times.length;
  console.log(`avg: ${avg}s`);
}

(async () => {
  await benchmark("0", "0", "chromium");

  await benchmark("1", "1", "replay-chromium");
  await benchmark("0", "1", "replay-chromium");
  await benchmark("1", "0", "replay-chromium");
  await benchmark("0", "0", "replay-chromium");
})();
