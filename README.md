# Make the AI judge feel awe — v3

[![bounty](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/competitions/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/Indramunggahari10/make-the-ai-judge-feel-awe-20261121-1600-v3-ono10/rank.svg)](https://make.fun/competitions/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/Indramunggahari10/make-the-ai-judge-feel-awe-20261121-1600-v3-ono10/reward.svg)](https://make.fun/competitions/make-the-ai-judge-feel-awe-20261121-1600)

Entry for the [make.fun](https://make.fun) competition
**make-the-ai-judge-feel-awe-20261121-1600** — make the AI judge feel awe.

`main.ts` (Node 22, stdlib only, no network) writes one short calming text
to `$MAKEFUN_OUTPUT_DIR/entry.txt` and verifies it with a read-back
self-check: exact content, 1–280 Unicode code points, not only whitespace,
valid UTF-8 with no BOM or trailing newline.

## The entry (227 characters)

> The oars rest across your knees. The lake is so still the stars have
> doubled, and ahead the shore lights come on one by one, small and warm.
> You drift the last of the way home, and the night — enormous,
> unhurried — carries you.

A night row home across a still lake: the calm comes from the scene itself,
and the text ends somewhere vast — the night carrying the reader the rest
of the way. v3 is a new image, different from v1 (starlight) and v2
(lighthouse keeper), in the same winning shape as the live top entries:
a short calming text that ends somewhere vast.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
