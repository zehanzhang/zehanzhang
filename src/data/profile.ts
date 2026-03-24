export const profile = {
  name: '张泽瀚',
  nameEn: 'Zehan Zhang',
  title: '具身智能工程师',
  titleEn: 'Embodied Intelligence Engineer',
  scholar: 'https://scholar.google.com/citations?user=C1Nxx_0AAAAJ&hl=zh-CN',
  education: '上海交通大学 博士 (Ph.D., Shanghai Jiao Tong University)',
  bio: '上海交通大学博士毕业，专注于自动驾驶与具身智能领域的算法研究与工程落地。研究方向涵盖空间智能、世界模型、多模态VLM 3D理解、3D基础模型等前沿课题，致力于推动智能体对三维物理世界的感知与理解。',
  researchInterests: [
    '空间智能',
    '世界模型',
    '多模态VLM+3D理解',
    '3D基础模型',
    '3D感知',
  ],
  heroTags: ['空间智能', '多模态3D理解', '3D基础模型', '数据闭环'],
  researchTimeline: [
    { period: '2018-2020', label: '3D目标检测', color: 'primary' },
    { period: '2020-2022', label: '多模态融合感知', color: 'accent-light' },
    { period: '2022-2024', label: 'VLM+3D理解', color: 'neon-green' },
    { period: '2024-', label: '空间智能&世界模型', color: 'primary' },
  ],
  stats: [
    { label: '论文', value: '15+' },
    { label: '总引用', value: '1000+' },
    { label: '顶会/顶刊论文', value: '7' },
    { label: '一作/共一/项目Leader', value: '10' },
    { label: '竞赛获奖(第一)', value: '5' },
    { label: '落地项目产值', value: '亿级' },
  ],
  travelLogs: [
    {
      title: '旅行记录 #1',
      location: '待更新',
      date: '待更新',
      cover: '',
      tags: ['待更新'],
      summary: '这里将记录旅途中的见闻与感悟，敬请期待。',
      status: 'coming' as const,
    },
    {
      title: '旅行记录 #2',
      location: '待更新',
      date: '待更新',
      cover: '',
      tags: ['待更新'],
      summary: '这里将记录旅途中的见闻与感悟，敬请期待。',
      status: 'coming' as const,
    },
    {
      title: '旅行记录 #3',
      location: '待更新',
      date: '待更新',
      cover: '',
      tags: ['待更新'],
      summary: '这里将记录旅途中的见闻与感悟，敬请期待。',
      status: 'coming' as const,
    },
  ],
}

export interface Publication {
  title: string
  authors: string
  venue: string
  year: number
  citations?: number
  link?: string
}

/** 重点展示的论文（带图片和简介） */
export interface FeaturedPublication extends Publication {
  image: string
  description: string
}

export const featuredPublications: FeaturedPublication[] = [
  {
    title: 'LaST-VLA: Thinking in Latent Spatio-Temporal Space for Vision-Language-Action in Autonomous Driving',
    authors: 'Yuechen Luo, Fang Li, Shaoping Xu, Yang Ji, Zehan Zhang, et al.',
    venue: 'arXiv 2025',
    year: 2025,
    link: 'https://arxiv.org/abs/2603.01928',
    image: 'images/last-vla.png',
    description: '提出在潜在时空空间中进行推理的视觉-语言-动作模型，将大语言模型与时空表征相结合，实现端到端自动驾驶决策与规划。',
  },
  {
    title: 'UniPLV: Towards Label-Efficient Open-World 3D Scene Understanding by Regional Visual Language Supervision',
    authors: 'Yuru Wang, Pei Liu, Songtao Wang, Zehan Zhang, Xinyan Lu, et al.',
    venue: 'arXiv 2024',
    year: 2024,
    citations: 1,
    link: 'https://arxiv.org/abs/2412.18131',
    image: 'images/uniplv.png',
    description: '通过区域视觉语言监督实现标签高效的开放世界3D场景理解，大幅减少对人工标注的依赖，提升模型在未知类别上的泛化能力。',
  },
  {
    title: 'RangeIoUDet: Range Image Based Real-Time 3D Object Detector Optimized by Intersection over Union',
    authors: 'Zhidong Liang, Zehan Zhang, Ming Zhang, Xian Zhao, Shiliang Pu',
    venue: 'CVPR 2021 Oral',
    year: 2021,
    citations: 92,
    link: 'https://openaccess.thecvf.com/content/CVPR2021/html/Liang_RangeIoUDet_Range_Image_Based_Real-Time_3D_Object_Detector_Optimized_by_CVPR_2021_paper.html',
    image: 'images/rangeioudet.png',
    description: '基于距离图像表征的实时3D目标检测器，利用IoU优化策略显著提升检测精度，在KITTI基准上达到实时性与精度的最佳平衡。',
  },
]

export const publications: Publication[] = [
  // === Featured 也列在全部列表中 ===
  {
    title: 'LaST-VLA: Thinking in Latent Spatio-Temporal Space for Vision-Language-Action in Autonomous Driving',
    authors: 'Y Luo, F Li, S Xu, Y Ji, Z Zhang, et al.',
    venue: 'arXiv 2025',
    year: 2025,
    link: 'https://arxiv.org/abs/2603.01928',
  },
  {
    title: 'UniPLV: Towards Label-Efficient Open-World 3D Scene Understanding by Regional Visual Language Supervision',
    authors: 'Y Wang, P Liu, S Wang, Z Zhang, X Lu, C Cai, H Li, F Liu, P Jia, X Lang',
    venue: 'arXiv 2024',
    year: 2024,
    citations: 1,
    link: 'https://arxiv.org/abs/2412.18131',
  },
  // === 其他论文 ===
  {
    title: 'Maff-net: Filter false positive for 3D vehicle detection with multi-modal adaptive feature fusion',
    authors: 'Z Zhang, Y Shen, H Li, X Zhao, M Yang, W Tan, SL Pu, H Mao',
    venue: 'IEEE ITSC 2022',
    year: 2022,
    citations: 44,
    link: 'https://ieeexplore.ieee.org/document/9922104',
  },
  {
    title: 'Enhancing multi-modal features using local self-attention for 3D object detection',
    authors: 'H Li, Z Zhang, X Zhao, Y Wang, Y Shen, S Pu, H Mao',
    venue: 'ECCV 2022',
    year: 2022,
    citations: 15,
    link: 'https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136700527.pdf',
  },
  {
    title: 'Atf-3d: Semi-supervised 3D object detection with adaptive thresholds filtering based on confidence and distance',
    authors: 'Z Zhang, Y Ji, W Cui, Y Wang, H Li, X Zhao, D Li, S Tang, M Yang, W Tan, ...',
    venue: 'IEEE Robotics and Automation Letters 7 (4)',
    year: 2022,
    citations: 13,
    link: 'https://ieeexplore.ieee.org/document/9811261',
  },
  {
    title: 'RangeIoUDet: Range Image Based Real-Time 3D Object Detector Optimized by Intersection over Union',
    authors: 'Z Liang, Z Zhang, M Zhang, X Zhao, S Pu',
    venue: 'CVPR 2021 Oral',
    year: 2021,
    citations: 92,
    link: 'https://openaccess.thecvf.com/content/CVPR2021/html/Liang_RangeIoUDet_Range_Image_Based_Real-Time_3D_Object_Detector_Optimized_by_CVPR_2021_paper.html',
  },
  {
    title: 'RangeLVDet: Boosting 3D object detection in LiDAR with range image and RGB image',
    authors: 'Z Zhang, Z Liang, M Zhang, X Zhao, H Li, M Yang, W Tan, S Pu',
    venue: 'IEEE Sensors Journal 22 (2)',
    year: 2021,
    citations: 36,
    link: 'https://ieeexplore.ieee.org/document/9612185',
  },
  {
    title: 'Semi-CenterPoint submission to the ICCV 2021 Workshop SSLAD Track 2-3D Object Detection',
    authors: 'Z Zhang, Y Ji, W Cui, Y Wang, X Zhao',
    venue: 'ICCV 2021 Workshop',
    year: 2021,
    link: 'https://scholar.google.com/scholar?q=Semi-CenterPoint+ICCV+2021+SSLAD',
  },
  {
    title: 'Voxel-FPN: Multi-scale voxel feature aggregation for 3D object detection from LiDAR point clouds',
    authors: 'H Kuang, B Wang, J An, M Zhang, Z Zhang',
    venue: 'Sensors 20 (3), 704',
    year: 2020,
    citations: 246,
    link: 'https://www.mdpi.com/1424-8220/20/3/704',
  },
  {
    title: 'Rangercnn: Towards fast and accurate 3D object detection with range image representation',
    authors: 'Z Liang, M Zhang, Z Zhang, X Zhao, S Pu',
    venue: 'arXiv 2020',
    year: 2020,
    citations: 118,
    link: 'https://arxiv.org/abs/2009.00206',
  },
  {
    title: 'Intelligent simultaneous fault diagnosis for solid oxide fuel cell system based on deep learning',
    authors: 'Z Zhang, S Li, Y Xiao, Y Yang',
    venue: 'Applied Energy 233, 930-942',
    year: 2019,
    citations: 136,
    link: 'https://www.sciencedirect.com/science/article/pii/S0306261918316854',
  },
  {
    title: 'Gaussian feature learning based on variational autoencoder for improving nonlinear process monitoring',
    authors: 'Z Zhang, T Jiang, C Zhan, Y Yang',
    venue: 'Journal of Process Control 75, 136-155',
    year: 2019,
    citations: 102,
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S095915241930037X',
  },
  {
    title: 'Modeling coverage with semantic embedding for image caption generation',
    authors: 'T Jiang, Z Zhang, Y Yang',
    venue: 'The Visual Computer 35 (11)',
    year: 2019,
    citations: 23,
    link: 'https://link.springer.com/article/10.1007/s00371-018-1565-z',
  },
  {
    title: 'Automated feature learning for nonlinear process monitoring–An approach using stacked denoising autoencoder and k-nearest neighbor rule',
    authors: 'Z Zhang, T Jiang, S Li, Y Yang',
    venue: 'Journal of Process Control 64, 49-61',
    year: 2018,
    citations: 163,
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S095915241830026X',
  },
  {
    title: 'A general approach for fault identification in SOFC-based power generation systems',
    authors: 'Z Zhang, S Li, Y Yang',
    venue: 'ACC 2018',
    year: 2018,
    citations: 9,
    link: 'https://ieeexplore.ieee.org/document/8430954',
  },
]
