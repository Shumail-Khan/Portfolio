export type ProjectCategory =
  | "Full Stack"
  | "Computer Vision"
  | "NLP"
  | "Data / ML";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  featured: boolean;
  description: string;
  problem?: string;
  solution?: string;
  features: string[];
  technologies: string[];
  architecture?: string;
  challenges?: string;
  outcome?: string;
  github?: string;
  liveDemo?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "stockpilot",
    title: "StockPilot",
    tagline: "Inventory Management System",
    category: "Full Stack",
    featured: true,
    description:
      "A full-stack inventory management platform for tracking products, categories, suppliers, and orders, built with the MERN stack and role-based access control.",
    problem:
      "Small and mid-size businesses often manage stock, suppliers, and orders across spreadsheets, which breaks down as product catalogs grow and multiple staff need different levels of access.",
    solution:
      "StockPilot centralizes product, category, supplier, and order management behind a single dashboard, with JWT-based authentication and role-based access so admins and staff see only what's relevant to them.",
    features: [
      "JWT authentication with role-based access control",
      "Centralized dashboard with inventory summaries",
      "Full CRUD for products, categories, and suppliers",
      "Order tracking from placement to fulfillment",
      "Responsive interface built with Tailwind CSS",
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
    ],
    architecture:
      "A React + Vite single-page frontend communicates with an Express REST API over Axios. MongoDB (via Mongoose) stores products, categories, suppliers, and orders, with JWT-based middleware guarding role-restricted routes.",
    challenges:
      "Modeling relationships between products, categories, suppliers, and orders in MongoDB while keeping queries fast and role checks consistent across every route required a careful, reusable authorization middleware layer.",
    outcome:
      "Deployed with a Dockerized backend, giving the app a repeatable, environment-independent deployment path.",
    github: "https://github.com/Shumail-Khan/Inventory-Management",
    liveDemo: "https://stockpilot-inventory-management-system.onrender.com/",
  },
  {
    slug: "facts-are-facts",
    title: "Facts Are Facts",
    tagline: "Podcast Platform",
    category: "Full Stack",
    featured: true,
    description:
      "A production-deployed full-stack podcast platform with a React frontend, an Express/MongoDB Atlas backend, custom REST APIs, and automated CI/CD to a custom domain.",
    problem:
      "Independent podcast creators need a lightweight platform to publish episodes — including YouTube-linked content — without depending on a third-party hosting service for every feature.",
    solution:
      "A React frontend consumes a custom Express API backed by MongoDB Atlas, supporting both direct file uploads and YouTube link references for episodes, with an admin dashboard for managing content.",
    features: [
      "Admin dashboard for publishing and managing episodes",
      "Support for direct audio uploads and YouTube-linked episodes",
      "Custom REST API with a cloud-hosted MongoDB Atlas database",
      "Automated CI/CD pipeline to production",
      "Deployed on a custom domain",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "REST APIs",
      "Vercel",
      "Render",
      "CI/CD",
    ],
    architecture:
      "React frontend deployed on Vercel talks to an Express API deployed on Render, backed by MongoDB Atlas. An automated CI/CD pipeline pushes changes to production on merge.",
    challenges:
      "Supporting two distinct episode sources — uploaded audio files and YouTube links — inside one consistent admin workflow and content model, without complicating the public-facing player.",
    outcome:
      "Live in production on a custom domain with a working CI/CD pipeline from commit to deploy.",
    github: "https://github.com/Shumail-Khan/Facts-R-Facts",
    liveDemo: "https://www.factsarefacts.live/",
  },
  {
    slug: "tree-project",
    title: "Tree Project",
    tagline: "Tree Service Management Platform",
    category: "Full Stack",
    featured: true,
    description:
      "A production-deployed MERN platform for a tree service business, pairing a customer-facing marketing site with a full admin system for content, requests, and estimates.",
    problem:
      "A local tree service business needed both a public site to showcase services and locations, and an internal system to manage blog content, incoming customer requests, and estimates — without maintaining two separate codebases.",
    solution:
      "One MERN application serves both audiences: a public site with service pages, a blog, and a gallery, and a JWT-secured admin panel for managing blog posts, categories, and customer requests.",
    features: [
      "Service and location-specific pages",
      "Blog with category management",
      "Photo gallery and customer testimonials",
      "Contact and service-estimate request forms",
      "Admin panel with blog, category, and request management",
    ],
    technologies: [
      "React",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "Material UI",
      "Tailwind CSS",
      "React Quill",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Multer",
    ],
    architecture:
      "React + Vite frontend with Redux Toolkit for state management, talking to an Express/MongoDB backend. Multer handles gallery and blog image uploads, and Slugify generates SEO-friendly URLs for blog and service pages.",
    challenges:
      "Keeping a public marketing site and an internal admin CMS in the same codebase without the admin surface leaking into the public bundle, while supporting rich content editing for non-technical staff.",
    outcome: "Deployed and publicly accessible as the business's live website.",
    github: "https://github.com/Shumail-Khan/Tree-Project",
    liveDemo: "https://americantreesexpert.com/",
  },
  {
    slug: "weapon-carrier-detection",
    title: "Unauthorized Weapon Carrier Detection",
    tagline: "Real-Time Computer Vision Security System — Final Year Project",
    category: "Computer Vision",
    featured: true,
    description:
      "A real-time computer vision system that monitors CCTV feeds to detect unauthorized weapon carriers and uniform status, built as a final-year thesis project.",
    problem:
      "Manual CCTV monitoring for security threats like unauthorized weapons is slow and error-prone, especially across multiple simultaneous feeds.",
    solution:
      "A YOLO-based detection pipeline processes live video, classifies detected persons by uniform status, and triggers automated alerts, with a web dashboard for configuring detection settings and reviewing incidents.",
    features: [
      "Real-time video stream processing",
      "Object detection for weapons and uniform classification",
      "Automated email and sound alerts on detection",
      "Configurable detection thresholds and settings",
      "Web dashboard for monitoring and incident review",
    ],
    technologies: [
      "Python",
      "YOLOv8 / YOLOv11 / YOLOv12",
      "OpenCV",
      "FastAPI",
      "MongoDB",
      "React",
    ],
    architecture:
      "A FastAPI backend serves YOLO inference over incoming video streams and stores incident records in MongoDB. A React frontend renders the live dashboard, alerts, and configuration controls.",
    challenges:
      "Iterating the training dataset across three versions — growing to roughly 7,400 images — to reduce false positives while keeping inference fast enough for real-time use, and evaluating across YOLOv8, v11, and v12 to balance accuracy and speed.",
    outcome:
      "Completed as a final-year thesis with a working end-to-end pipeline from video ingestion to alerting.",
    github: "https://github.com/Shumail-Khan/Unauthorized-Weapon-Carrier-Detection",
    note: "Presented here at a high level; imagery and dataset details are intentionally omitted from the public write-up.",
  },
  {
    slug: "credit-scoring",
    title: "Credit Scoring",
    tagline: "Bank Loan Risk Classification",
    category: "Data / ML",
    featured: true,
    description:
      "A machine-learning risk classification pipeline for evaluating bank loan applicants, using ensemble learning and class-imbalance handling, served through a FastAPI inference endpoint.",
    problem:
      "Loan applicant data is typically imbalanced — far fewer default cases than non-default — which biases naive classifiers toward the majority class and understates real risk.",
    solution:
      "The pipeline balances classes with SMOTE before training gradient-boosted ensemble models (CatBoost and XGBoost), then exposes the trained model for real-time inference through a FastAPI service.",
    features: [
      "Data preprocessing and feature engineering for loan applications",
      "Class-imbalance correction with SMOTE",
      "Ensemble model training with CatBoost and XGBoost",
      "Real-time inference via a FastAPI endpoint",
    ],
    technologies: ["Python", "CatBoost", "XGBoost", "SMOTE", "FastAPI", "Scikit-learn"],
    architecture:
      "A training pipeline (preprocessing → SMOTE → ensemble training → evaluation) produces a serialized model, which a FastAPI service loads to serve predictions on new applicant data.",
    challenges:
      "Balancing recall on default cases against overall accuracy — over-correcting for imbalance can flood a lender with false positives, so threshold tuning mattered as much as model choice.",
    github: "https://github.com/Shumail-Khan/Credit-Scoring",
  },
  {
    slug: "sentiment-analysis",
    title: "Sentiment Analysis",
    tagline: "BERT-Based NLP System",
    category: "NLP",
    featured: true,
    description:
      "An NLP sentiment-analysis system using a fine-tuned BERT transformer to classify customer reviews, exposed through a REST API for downstream business use.",
    problem:
      "Businesses collect large volumes of unstructured customer review text that's impractical to read manually but contains clear signals about product and service sentiment.",
    solution:
      "A BERT model is fine-tuned on labeled review data to classify sentiment, then served through a FastAPI REST endpoint that downstream systems can call for real-time predictions.",
    features: [
      "Fine-tuned BERT transformer for sentiment classification",
      "REST API for real-time inference",
      "Preprocessing pipeline for raw customer review text",
    ],
    technologies: ["Python", "BERT", "Hugging Face Transformers", "FastAPI", "PyTorch"],
    architecture:
      "Text is cleaned and tokenized before being passed to a fine-tuned BERT classification head; the FastAPI service wraps the model for synchronous inference requests.",
    challenges:
      "Fine-tuning a transformer model with a limited labeled dataset without overfitting, and keeping inference latency low enough for a responsive API.",
    github: "https://github.com/Shumail-Khan/Sentiment-Analysis",
  },
  {
    slug: "hr-candidate-management",
    title: "HR Candidate Management System",
    tagline: "Recruitment Management Platform",
    category: "Full Stack",
    featured: false,
    description:
      "A full-stack recruitment platform for managing applicants, candidate profiles, job opportunities, and applications on a relational database.",
    features: [
      "Candidate profiles and job opportunity listings",
      "Application tracking tied to relational records",
      "Authentication with role-based access",
      "Soft-deletion for recoverable records",
    ],
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Sequelize", "JWT"],
    github: "https://github.com/Shumail-Khan/HR-Candidate-Management-System",
  },
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    tagline: "Explainable ML for Retention",
    category: "Data / ML",
    featured: false,
    description:
      "A churn prediction system using a Random Forest classifier with SHAP-based explainability to surface why individual customers are flagged at risk.",
    features: [
      "Random Forest classification for churn risk",
      "SHAP explainability for individual predictions",
      "Feature importance analysis for business insight",
    ],
    technologies: ["Python", "Random Forest", "SHAP", "Scikit-learn"],
    github: "https://github.com/Shumail-Khan/Customer-Churn-Prediction",
  },
  {
    slug: "fruit-detection",
    title: "Fruit Detection",
    tagline: "YOLO Object Detection",
    category: "Computer Vision",
    featured: false,
    description:
      "A computer vision project detecting and classifying fruit objects in images using a YOLO-based object detection pipeline.",
    features: ["Custom-trained YOLO detection model", "Image-based inference pipeline"],
    technologies: ["Python", "YOLO", "OpenCV"],
    github: "https://github.com/Shumail-Khan/Fruit-Detection",
  },
  {
    slug: "smart-attendance",
    title: "Smart Attendance System",
    tagline: "Computer Vision Attendance Tracking",
    category: "Computer Vision",
    featured: false,
    description:
      "An automated attendance system exploring face and person recognition for tracking attendance through computer vision rather than manual sign-in.",
    features: ["Vision-based presence detection", "Automated attendance logging"],
    technologies: ["Python", "OpenCV", "Machine Learning"],
    github: "https://github.com/Shumail-Khan/Smart-Attendance-System",
  },
  {
    slug: "news-topic-classifier",
    title: "News Topic Classifier",
    tagline: "NLP Text Classification",
    category: "NLP",
    featured: false,
    description:
      "An NLP project that classifies news articles into predefined topics using text classification techniques.",
    features: ["Text preprocessing and vectorization", "Multi-class topic classification"],
    technologies: ["Python", "Scikit-learn", "NLP"],
    github: "https://github.com/Shumail-Khan/News-Topic-Classifier",
  },
  {
    slug: "laptop-price-predictor",
    title: "Laptop Price Predictor",
    tagline: "Regression-Based Price Estimation",
    category: "Data / ML",
    featured: false,
    description:
      "A regression model that estimates laptop prices from specifications such as processor, RAM, storage, and display.",
    features: ["Feature engineering from hardware specifications", "Regression-based price estimation"],
    technologies: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/Shumail-Khan/Laptop-Price-Predictor",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Full Stack",
  "Computer Vision",
  "NLP",
  "Data / ML",
];
