# Nurul Nasyrah — Portfolio Website

React + Vite + TypeScript single-page portfolio.

## Setup

Requires Node.js LTS ([nodejs.org](https://nodejs.org)) and Python 3.10+ with
PyMuPDF and Pillow installed (`pip install pymupdf pillow`).

```bash
npm install
npm run build   # sanity check: tsc -b + vite build, should report zero errors
npm run dev
```

## Asset pipeline

The site reads real images and a redacted resume from `public/`, which are
**not** committed pre-built — they're generated from the original source
documents (resume, certificates, the FYP report, project photos) by the
Python scripts in `scripts/`. Those source documents must be present at the
repo root (they're tracked in this repo) for the pipeline to run. Run once
before `npm run dev` if `public/images/` and `public/resume.pdf` aren't
already populated, or after changing any source document:

```bash
python scripts/run_pipeline.py
```

This redacts IC numbers, matric numbers, and phone numbers from certificates
and the resume before they're copied into `public/`. After running it,
visually re-check `public/resume.pdf` and a sample of
`public/images/certificates/*.png` yourself — the pipeline's automated tests
(`scripts/test_*.py`) catch structural regressions, not every possible PII
leak, and this project's history includes at least one case (see git log,
"redact References section") where a real leak slipped past the tests and
was only caught by a human/agent visual check.

## Deploy to GitHub Pages

1. Update `base` in `vite.config.ts` to `/<your-repo-name>/`.
2. **Before making the repository public**, note that the git history on
   this branch (and `master`) includes the *original, unredacted* source
   documents — `Certificate/*.pdf` (real IC/matric numbers),
   `Resume Internship_Nurul Nasyrah.pdf` (a real phone number, referee
   contact details), and the two group-project source decks with teammates'
   photos and matric numbers on their "team" slides. Only the *processed*
   output in `public/` is redacted. A public GitHub repo (required for
   GitHub Pages on a free account) would expose these files' full history,
   not just the current `dist/` build. Decide how to handle this before
   deploying — options include keeping the repo private and using GitHub
   Pages with a paid plan, publishing from an orphan branch that only ever
   contains `public/`'s redacted output, or scrubbing the source files from
   history (e.g. `git filter-repo`) on a copy of the repo intended for
   publishing.
3. `npm run deploy`
4. Enable GitHub Pages in repo settings, source: `gh-pages` branch.
