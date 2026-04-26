/**
 * Project data — separated from UI component.
 * Each project has: imgPath, title, description, howItWorks, results, techStack, ghLink, demoLink, role
 */
import emotion from "../Assets/Projects/emotion.png";
import chatify from "../Assets/Projects/chatify.png";
import editor from "../Assets/Projects/codeEditor.png";
import leaf from "../Assets/Projects/leaf.png";
import suicide from "../Assets/Projects/suicide.png";
import bitsOfCode from "../Assets/Projects/blog.png";

const projectData = [
  {
    imgPath: emotion,
    title: "Multitask Speech Emotion & Stress Detection",
    description:
      "Hybrid deep learning architecture (Wav2Vec2 + BiLSTM) for simultaneous emotion classification and stress prediction from raw speech audio. Unified preprocessing pipeline across RAVDESS, TESS, and SAVEE datasets covering 5 emotion classes.",
    howItWorks:
      "Raw audio → Wav2Vec2 feature extraction → BiLSTM temporal modeling → Dual classification heads (emotion + stress). End-to-end training with multi-task loss. Preprocessing unifies sample rates, silence trimming, and augmentation across 3 datasets.",
    results:
      "85.9% accuracy, 0.856 F1-Score across 5 emotion classes. Outperformed single-task baselines by 4.2%.",
    techStack: ["Python", "PyTorch", "Wav2Vec2", "BiLSTM", "Librosa", "HuggingFace"],
    ghLink: "https://github.com/sejalsahu01",
    demoLink: "https://huggingface.co/sejalsahu01/hybrid_wave2vec-RAV-TESS-SAVEE",
    role: "aiml",
  },
  {
    imgPath: chatify,
    title: "Personalized Cold Email AI Agent",
    description:
      "End-to-end AI-powered cold email automation system using n8n. Integrates CRM-style lead data with LLM APIs to generate personalized, human-like email content.",
    howItWorks:
      "Lead data ingestion → LLM-based template generation → Personalization engine matches lead profile → Automated scheduling and sending via n8n workflows. Tracks open rates and responses.",
    results:
      "Reduced manual outreach effort by 70–80%. Enabled scalable lead generation with personalized content.",
    techStack: ["n8n", "LLM APIs", "CRM Integration", "Email Automation"],
    ghLink: "https://github.com/sejalsahu01",
    role: "both",
  },
  {
    imgPath: editor,
    title: "Object Detection using YOLOv3",
    description:
      "Real-time object detection capable of detecting multiple objects in images and video streams. Fine-tuned the model on a custom labeled dataset with bounding boxes.",
    howItWorks:
      "Custom dataset annotation → YOLOv3 model training with transfer learning → Real-time inference pipeline using OpenCV for video stream processing. Non-max suppression for overlapping box filtering.",
    results:
      "Achieved real-time detection at 30+ FPS. Successfully detected 15+ object categories with mAP > 0.75.",
    techStack: ["Python", "YOLOv3", "OpenCV", "Darknet", "NumPy"],
    ghLink: "https://github.com/sejalsahu01",
    role: "aiml",
  },
  {
    imgPath: leaf,
    title: "Hyperspectral Image Analysis Tool",
    description:
      "GUI-based Hyperspectral Image Analysis Tool handling 204 spectral bands per image, enabling real-time visualization and spectral analysis.",
    howItWorks:
      "Load hyperspectral cube → Band selection & visualization → ROI selection via GUI → Segment Anything Model (SAM) segmentation → Spectral signature extraction and comparison. Built during IIT Kanpur Research Internship.",
    results:
      "Processes 204-band images in real-time. Integrated SAM for precise ROI segmentation.",
    techStack: ["Python", "SAM", "Spectral Analysis", "GUI Development", "NumPy"],
    ghLink: "https://github.com/sejalsahu01",
    role: "aiml",
  },
  {
    imgPath: suicide,
    title: "Breast Cancer Classification",
    description:
      "Binary classification on Wisconsin Breast Cancer dataset comparing multiple ML algorithms to evaluate performance and feature importance.",
    howItWorks:
      "Data preprocessing → Feature scaling → Model training (Logistic Regression, SVM, Random Forest, KNN, Decision Tree) → Cross-validation → Performance comparison via accuracy, precision, recall, and ROC-AUC.",
    results:
      "Best model achieved 97.2% accuracy. Feature importance analysis identified key diagnostic predictors.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    ghLink: "https://github.com/sejalsahu01/Breast_Cancer_Classification",
    role: "ds",
  },
  {
    imgPath: bitsOfCode,
    title: "Hotel Cancellation Analysis",
    description:
      "EDA project analyzing factors driving high hotel booking cancellation rates. Identifies patterns in lead time, deposit type, customer segment, and seasonality.",
    howItWorks:
      "Data cleaning → Univariate & bivariate analysis → Correlation heatmaps → Hypothesis testing on cancellation drivers → Actionable business recommendations for reducing cancellation rates.",
    results:
      "Identified top 5 cancellation predictors. Provided data-driven strategies to reduce cancellation by ~15%.",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    ghLink: "https://github.com/sejalsahu01/Hotel-Cancellation-Analysis",
    role: "ds",
  },
];

export default projectData;
