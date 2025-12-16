import { PortfolioData } from './types';

export const DATA_EN: PortfolioData = {
  hero: {
    name: "Chenghuan Yu",
    role: "M.Sc Robotic Engineering Student",
    bio: "Passionate Robotics and Algorithm Engineer specializing in SLAM, Computer Vision, and 6DoF pose estimation. Currently pursuing a Master's at RWTH Aachen University. Experienced in full-stack robot development from mechanical design to algorithmic deployment.",
    location: "Aachen, Germany",
    status: "#OpenToWork"
  },
  sectionTitles: {
    projects: "Featured Projects",
    experience: "Work Experience",
    education: "Education",
    skills: "Technical Arsenal",
    patents: "Patents"
  },
  projects: [
    {
      id: "p1",
      title: "Long-range Intelligent Target Reporting System",
      institution: "RWTH Aachen University",
      period: "Mar 2025 - Present",
      description: "Developing a long-distance target identification and reporting system. Currently undergoing patent registration. The system integrates computer vision for precise target acquisition.",
      techStack: ["JavaScript", "C++", "Machine Learning", "HTML", "SolidWorks"],
      media: [
        { type: "image", caption: "System Array Setup" },
        { type: "image", caption: "Target Recognition UI" },
        { type: "image", caption: "Calibration Interface" }
      ]
    },
    {
      id: "p2",
      title: "LineMod Dataset Automation",
      institution: "South China University of Technology",
      period: "Research Project",
      description: "Created a pipeline for generating LineMod datasets using BlenderProc and Automatic Semantic Segmentation. Significantly improved training data generation efficiency for 6D pose estimation models.",
      techStack: ["OpenCV", "MeshLab", "Blender", "Python"],
      link: "https://gitee.com/yu-chenghuan/Linemod-Real.git",
      media: [
        { type: "image", caption: "3D Cube Rendering" },
        { type: "image", caption: "Semantic Segmentation Mask" }
      ]
    },
    {
      id: "p3",
      title: "Wheel-Leg Robot",
      institution: "South China University of Technology",
      period: "Graduation Project",
      description: "Full-stack development of a hybrid wheel-leg robot. Won 'Best Graduation Project'. Handled mechanical design, circuit design, and ROS control algorithms for locomotion.",
      techStack: ["C++", "Python", "ROS", "Embedded Systems"],
      link: "https://gitee.com/yu-chenghuan/wheel-legged-robot.git",
      media: [
        { type: "image", caption: "Robot Prototype" },
        { type: "video", caption: "Locomotion Demo" }
      ]
    }
  ],
  experience: [
    {
      role: "Application Development Intern",
      company: "Mech-Mind Robotics",
      period: "Jul 2024 - Sep 2024",
      location: "Beijing, China",
      description: [
        "Developed applications using Python and MongoDB.",
        "Worked on Large Language Model (LLM) deployment and invocation."
      ],
      techStack: ["Python", "MongoDB", "LLM"]
    },
    {
      role: "Structural Engineer Intern",
      company: "Foshan Yuanyuan Electric",
      period: "Aug 2023 - Nov 2023",
      location: "Guangdong, China",
      description: ["Designed mechanical structures and enclosures for electrical components using CAD tools."],
      techStack: ["AutoCAD", "SolidWorks"]
    },
    {
      role: "Algorithm Engineer Intern",
      company: "SCUT Robotics Lab",
      period: "Apr 2022 - Sep 2023",
      location: "Guangdong, China",
      description: [
        "Focused on 6DoF pose calculation, target recognition, and tracking.",
        "Project won 1st Prize in National Robotics Master Competition.",
        "Deployed Deep Learning and Reinforcement Learning algorithms on robots."
      ],
      techStack: ["Python", "PyTorch", "ROS", "OpenCV"]
    }
  ],
  education: [
    {
      school: "RWTH Aachen University",
      degree: "Master of Engineering - M.Eng, Robotic Engineering",
      period: "Oct 2024 - May 2027",
      achievements: ["Focus: ROS, OpenCV, Machine Learning"]
    },
    {
      school: "South China University of Technology",
      degree: "Bachelor of Engineering, Electrical Engineering & Automation",
      period: "Sep 2020 - Jul 2024",
      gpa: "3.2",
      achievements: ["Robot Lab Member", "Tennis Team"]
    }
  ],
  patents: [
    {
      title: "Target Reporting System",
      number: "20 2025 003 252.6",
      date: "2025-10-30",
      description: "A long-distance target reporting system based on OpenCV, C++, and Javascript."
    }
  ],
  skills: [
    { category: "Languages", items: ["Python", "C++", "JavaScript", "HTML"] },
    { category: "AI & CV", items: ["PyTorch", "OpenCV", "Machine Learning", "Reinforcement Learning", "LLMs"] },
    { category: "Robotics", items: ["ROS (Robot Operating System)", "SLAM", "Path Planning"] },
    { category: "Tools", items: ["SolidWorks", "AutoCAD", "MeshLab", "Blender", "Git", "MongoDB"] }
  ]
};

export const DATA_CN: PortfolioData = {
  hero: {
    name: "余承欢",
    role: "机器人工程硕士在读 / 算法工程师",
    bio: "热衷于机器人技术和算法研发，专注于SLAM、计算机视觉和6自由度姿态估计。目前在德国亚琛工业大学攻读硕士学位。拥有从机械设计到算法部署的机器人全栈开发经验。",
    location: "德国 亚琛",
    status: "#求职中"
  },
  sectionTitles: {
    projects: "精选项目",
    experience: "工作经历",
    education: "教育背景",
    skills: "技术栈",
    patents: "专利与成果"
  },
  projects: [
    {
      id: "p1",
      title: "远程智能目标报告系统",
      institution: "德国亚琛工业大学",
      period: "2025年3月 - 至今",
      description: "开发基于计算机视觉的远距离目标识别与报告系统。目前正在申请专利。该系统集成了先进的视觉算法，用于精确的目标获取与遥测。",
      techStack: ["JavaScript", "C++", "Machine Learning", "HTML", "SolidWorks"],
      media: [
        { type: "image", caption: "系统阵列设置" },
        { type: "image", caption: "目标识别界面" },
        { type: "image", caption: "校准后台" }
      ]
    },
    {
      id: "p2",
      title: "LineMod 数据集自动化生成",
      institution: "华南理工大学",
      period: "科研项目",
      description: "基于 BlenderProc 和自动语义分割构建了 LineMod 数据集生成流水线。显著提高了 6D 姿态估计模型的训练数据生成效率。",
      techStack: ["OpenCV", "MeshLab", "Blender", "Python"],
      link: "https://gitee.com/yu-chenghuan/Linemod-Real.git",
      media: [
        { type: "image", caption: "3D 立方体渲染" },
        { type: "image", caption: "语义分割掩码" }
      ]
    },
    {
      id: "p3",
      title: "轮腿机器人",
      institution: "华南理工大学",
      period: "毕业设计",
      description: "混合轮腿机器人的全栈开发。荣获“优秀毕业设计”。负责机械设计、电路设计以及基于ROS的运动控制算法。",
      techStack: ["C++", "Python", "ROS", "Embedded Systems"],
      link: "https://gitee.com/yu-chenghuan/wheel-legged-robot.git",
      media: [
        { type: "image", caption: "机器人原型" },
        { type: "video", caption: "运动演示" }
      ]
    }
  ],
  experience: [
    {
      role: "应用开发实习生",
      company: "梅卡曼德机器人 (Mech-Mind)",
      period: "2024年7月 - 2024年9月",
      location: "中国 北京",
      description: [
        "使用 Python 和 MongoDB 进行应用开发。",
        "负责大语言模型 (LLM) 的部署与机器人调用集成。"
      ],
      techStack: ["Python", "MongoDB", "LLM"]
    },
    {
      role: "结构工程师实习生",
      company: "佛山源源电气",
      period: "2023年8月 - 2023年11月",
      location: "中国 广东",
      description: ["使用 CAD 工具设计电气元件的机械结构和外壳。"],
      techStack: ["AutoCAD", "SolidWorks"]
    },
    {
      role: "算法工程师实习生",
      company: "华南理工大学 机器人实验室",
      period: "2022年4月 - 2023年9月",
      location: "中国 广东",
      description: [
        "专注于 6DoF 姿态计算、目标识别与跟踪。",
        "项目获全国机器人大师赛一等奖。",
        "在机器人上部署深度学习和强化学习算法。"
      ],
      techStack: ["Python", "PyTorch", "ROS", "OpenCV"]
    }
  ],
  education: [
    {
      school: "德国亚琛工业大学 (RWTH Aachen)",
      degree: "工程硕士 - 机器人工程",
      period: "2024年10月 - 2027年5月",
      achievements: ["主修: ROS, OpenCV, 机器学习"]
    },
    {
      school: "华南理工大学",
      degree: "工学学士 - 电气工程及其自动化",
      period: "2020年9月 - 2024年7月",
      gpa: "3.2",
      achievements: ["机器人实验室成员", "网球队"]
    }
  ],
  patents: [
    {
      title: "Target Reporting System",
      number: "20 2025 003 252.6",
      date: "2025-10-30",
      description: "基于 OpenCV, C++ 和 Javascript 的远距离目标报告系统实用新型专利。"
    }
  ],
  skills: [
    { category: "编程语言", items: ["Python", "C++", "JavaScript", "HTML"] },
    { category: "AI & 视觉", items: ["PyTorch", "OpenCV", "Machine Learning", "Reinforcement Learning", "LLMs"] },
    { category: "机器人", items: ["ROS (Robot Operating System)", "SLAM", "Path Planning"] },
    { category: "工具软件", items: ["SolidWorks", "AutoCAD", "MeshLab", "Blender", "Git", "MongoDB"] }
  ]
};