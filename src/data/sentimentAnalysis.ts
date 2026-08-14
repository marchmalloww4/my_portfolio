export interface SentimentMethodResult {
  accuracy: number
  precision: number
  recall: number
  f1: number
}

export interface SentimentModelResult {
  model: string
  crossValidation: SentimentMethodResult | null
  splitData: SentimentMethodResult
}

// Source: BIZQUEENS_SLIDES.pdf, "Comparison Graph" + "Model Comparison" +
// per-model slides (SVM/Naive Bayes/Logistics Regression/Deep Learning).
// The "Comparison Graph" bar chart unambiguously labels which accuracy value
// belongs to which validation method for every model — used here to resolve
// an ordering ambiguity between two other slides that presented the same
// numbers without an unambiguous label.
export const sentimentModelResults: SentimentModelResult[] = [
  {
    model: 'SVM',
    crossValidation: { accuracy: 75.53, precision: 71.24, recall: 85.83, f1: 77.86 },
    splitData: { accuracy: 72.58, precision: 67.46, recall: 87.51, f1: 76.19 },
  },
  {
    model: 'Naive Bayes',
    crossValidation: { accuracy: 74.33, precision: 70.01, recall: 85.34, f1: 76.92 },
    splitData: { accuracy: 74.46, precision: 70.58, recall: 84.10, f1: 76.75 },
  },
  {
    model: 'Logistic Regression',
    crossValidation: { accuracy: 80.52, precision: 78.16, recall: 84.82, f1: 81.35 },
    splitData: { accuracy: 80.78, precision: 78.79, recall: 84.36, f1: 81.48 },
  },
  {
    model: 'Deep Learning',
    crossValidation: null, // not reported in the source deck — do not invent one
    splitData: { accuracy: 80.79, precision: 80.54, recall: 81.31, f1: 80.92 },
  },
]

// Source: "Deep Learning" slide's confusion matrix (RapidMiner format: rows
// are predicted class, columns are actual class). Total = 10,753, matching
// the 0.7/0.3 split-data test set size.
export const sentimentConfusionMatrix = {
  model: 'Deep Learning (best-performing model)',
  truePositive: 4382,
  falsePositive: 1059,
  falseNegative: 1007,
  trueNegative: 4305,
  accuracy: 80.79,
}

// Source: "Data Source" + "Class Label Assignment" slides — the labeled,
// balanced dataset used to TRAIN the models (4-5 stars = positive, 1-2 stars
// = negative, 3 stars manually reviewed).
export const sentimentDatasetStats = {
  source: 'Kaggle — "Threads App Reviews" dataset (jayagopal20)',
  channels: ['Google Play Store', 'Apple App Store'],
  totalReviews: 40000,
  labelingRule: '4-5 stars = positive, 1-2 stars = negative, 3 stars = manually reviewed',
  balancedLabels: { positive: 17963, negative: 17881 },
}

// Source: "Overall User Sentiment Towards Threads App" slide — a separate
// finding from balancedLabels above: this is the full-corpus sentiment
// result/business insight, not the training-label distribution.
export const sentimentOverallSplit = { positive: 44.2, negative: 55.8 }

export const sentimentPipeline = {
  tool: 'RapidMiner',
  methodology: 'CRISP-DM',
  featureExtraction: 'TF-IDF (after case-folding, tokenization, stopword removal, n-gram generation)',
  group: {
    name: 'BizQueens',
    course: 'ISP610 Business Data Analytics',
    size: 4,
    supervisor: 'Dr Ruhaila Binti Maskat',
  },
}
