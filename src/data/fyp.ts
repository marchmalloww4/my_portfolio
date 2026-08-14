import type { ProjectLink } from './types'

export interface FypStageResult {
  stage: 'Baseline' | 'Fine-Tune' | 'Hyper-Tune'
  ridge: { mae: number; rmse: number; r2: number }
  bert: { mae: number; rmse: number; r2: number }
}

// Source: Table 4.5 "Overall Model Comparison", FINALIZED REPORT_FYP.pdf,
// held-out evaluation set. Read directly from the report this session.
export const fypStageComparison: FypStageResult[] = [
  {
    stage: 'Baseline',
    ridge: { mae: 19.6376, rmse: 23.6098, r2: 0.4132 },
    bert: { mae: 14.3278, rmse: 22.0300, r2: 0.4891 },
  },
  {
    stage: 'Fine-Tune',
    ridge: { mae: 14.3530, rmse: 21.2747, r2: 0.5235 },
    bert: { mae: 16.8097, rmse: 24.9416, r2: 0.3452 },
  },
  {
    stage: 'Hyper-Tune',
    ridge: { mae: 25.0230, rmse: 28.1219, r2: 0.1675 },
    bert: { mae: 12.4249, rmse: 20.7442, r2: 0.5470 },
  },
]

export const fypProject = {
  slug: 'fyp-extraverse-ai',
  title: 'Personality Prediction from Writing Style Using Natural Language Processing and Machine Learning',
  productName: 'ExtraVerse AI',
  traitScope:
    'Predicts the Extraversion trait of the Big Five personality model specifically — not all five traits.',
  role: 'Final Year Project student / researcher / developer',
  institution: 'Faculty of Computer and Mathematical Sciences, Universiti Teknologi MARA (UiTM)',
  supervisor: 'Dr Azlin binti Ahmad',
  technologies: [
    'Python', 'NLP', 'Machine Learning', 'PyTorch', 'Hugging Face Transformers',
    'scikit-learn', 'TF-IDF', 'BERT', 'SHAP', 'Git', 'VS Code', 'Gradio',
  ],
  overview:
    'This study integrates linguistic and emotional feature engineering (NRC emotion lexicon) with two model families — Ridge Regression and BERT Regression — to predict Extraversion scores from raw text. Each model family was evaluated across three training stages (Baseline, Fine-Tune, Hyper-Tune), with performance measured by MAE, RMSE, and R², plus statistical significance testing. A SHAP-based explainability layer surfaces which words and features drove each prediction, presented through a Gradio web app.',
  methodologySteps: [
    'Raw Text',
    'Data Cleaning',
    'Preprocessing',
    'Feature Engineering (linguistic + NRC emotion features)',
    'Model Training (Ridge & BERT, 3 stages each)',
    'Model Evaluation (MAE / RMSE / R², significance testing)',
    'Prediction Interface (Gradio)',
  ],
  stageComparison: fypStageComparison,
  headline: { r2: 0.5470, mae: 12.4249, rmse: 20.7442, model: 'BERT Regression, Hyper-Tune stage' },
  headlineExplanation:
    'R² of 0.547 means the model explains roughly 55% of the variance in Extraversion scores from text alone — well above the zero baseline of simply predicting the average score for everyone. Lower MAE and RMSE mean tighter, more consistent predictions.',
  interfaceImages: {
    main: { src: '/images/fyp/interface-main.png', caption: 'ExtraVerse AI — main interface (Gradio)' },
    result: { src: '/images/fyp/interface-result.png', caption: 'ExtraVerse AI — result and SHAP explanation panels (pre-analysis state)' },
  },
  frontPageImage: '/images/fyp/front-page.png',
  challenges: [
    'Text preprocessing at scale across a noisy, informal dataset',
    'Integrating engineered linguistic/emotional features with transformer embeddings',
    'Computational cost of fine-tuning and hyperparameter-searching BERT',
    'Model evaluation and explainability limitations — SHAP token-level attribution reliability',
  ],
  learnings: [
    'End-to-end NLP and ML pipeline design',
    'Working with transformer models (BERT) in practice, not just in theory',
    'Rigorous model evaluation methodology (MAE/RMSE/R², significance testing)',
    'Structured experimentation and debugging across model families',
    'Research and technical communication',
  ],
  futureImprovements: [
    'More diverse training datasets',
    'Further hyperparameter tuning',
    'Larger transformer models',
    'Improved deployment beyond the Gradio prototype',
    'More robust, generalizable evaluation',
  ],
  links: [
    { label: 'View GitHub', href: '#', isPlaceholder: true },
    { label: 'View Project', href: '#', isPlaceholder: true },
    { label: 'View Demo', href: '#', isPlaceholder: true },
  ] satisfies ProjectLink[],
}
