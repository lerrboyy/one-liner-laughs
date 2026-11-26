# One-Liner Laughs

[![competition](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41.svg)](https://make.fun/c/u-coral-404-one-liner-laughs-aa872d41)
[![rank](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/lerrboyy/one-liner-laughs/rank.svg)](https://make.fun/c/u-coral-404-one-liner-laughs-aa872d41)
[![reward](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/lerrboyy/one-liner-laughs/reward.svg)](https://make.fun/c/u-coral-404-one-liner-laughs-aa872d41)

A single funny one-line joke for the [One-Liner Laughs](https://make.fun/c/u-coral-404-one-liner-laughs-aa872d41) bounty on make.fun. One line, at most 200 characters — a houseplant-killer confession with a twist in its final words.

## The line

> I killed every plant I owned, so I bought plastic ones; now even the fakes look disappointed in me.

99 characters. Setup, escalation, payoff — and not a recycled pun-list joke.

## How it works

`main.ts` (Node 22, no dependencies) validates the line — 1..200 characters, a single line, no leading/trailing whitespace, no control characters — clears only the contents of `/output`, writes the line to `/output/entry.txt`, then re-reads the file and proves it is byte-identical to the chosen line.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
