import type { Metadata } from 'next';
import Link from 'next/link';
import '../globals.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'A summary myself.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>

      {/* =======================001======================= */}
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">News&#x2757;</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          <li>
            <strong>[2024/04/01]</strong> &nbsp;&nbsp; Release a new new Personal Websites!
          </li>
          <li>
            <strong>[2023/11/15]</strong> &nbsp;&nbsp; Starting my new job at iFLYTEK!
          </li>
          <li>
            <strong>[2023/08/18]</strong> &nbsp;&nbsp; Patent <a href="https://worldwide.espacenet.com/patent/search/family/086876285/publication/CN116342434A?q=pn%3DCN116342434A" target="_blank">《An Image Processing Method, Device, Equipment and Storage Medium》</a> was Published!
          </li>
          <li>
            <strong>[2023/08/03]</strong> &nbsp;&nbsp; Release a new Personal Websites!
          </li>
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* =======================002======================= */}
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Education</h1>

      <h2 className="font-medium text-xl mb-1 tracking-tighter">Guangdong University of Technology - School of Information Engineering, Guangzhou, CHN [2019~2022]</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          M.Eng. in Electronic and Communication Engineering <br/>
          Supervisor: Prof. <a href="https://yzw.gdut.edu.cn/info/1088/1334.htm" target="_blank">Qingyun Dai</a>
        </p>

      <h2 className="font-medium text-xl mb-1 tracking-tighter">Huanghe S & T University - School of Information Engineering, Zhengzhou, CHN [2015~2019]</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          B.Eng. in Electronic and Communication Engineering
        </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* =======================003======================= */}
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Experience</h1>

      <h2 className="font-medium text-xl mb-1 tracking-tighter">iFLYTEK - Zhengzhou, CHN</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            <em>R&D Department, Computer Vision Algorithm Engineer</em><br/>
            Nov. 2023 - Present <br/>
            Focus: Image Segmentation, Object Detection
        </p>

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Zhengzhou Xinda Institute of Advanded Technology - Zhengzhou, CHN</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          <em>Technology R&D Department, Algorithm Engineer</em><br/>
          Mar. 2023 - Nov. 2023 <br/>
          Focus: Object Detection, Image Segmentation, and Multi-modal Fusion
        </p>

        <h2 className="font-medium text-xl mb-1 tracking-tighter">CASIVISION TECH LUOYANG CO LTD - Luoyang, CHN</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          <em>Algorithm Research Institute, Algorithm Engineer</em><br/>
          Jul. 2022 - Mar. 2023 <br/>
          Focus: Visual Algorithms for Industrial Defect Detection Project
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* =======================004======================= */}
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Papers <a href="https://scholar.google.com/citations?user=87stumIAAAAJ&hl=en" target="_blank">[Google Scholar]</a></h1>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Learning invariant and uniformly distributed feature space for multi-view generation</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Yuqin Lu, Jiangzhong Cao, Shengfeng He, <strong>Jiangtao Guo</strong>, Qiliang Zhou, and Qingyun Dai<br/>
          <em>Information Fusion, 2023</em><br/>
          <a href="https://doi.org/10.1016/j.inffus.2023.01.011" target="_blank">[Paperlink]</a>, [Code], [Project Page], [Demo], [Video]
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />


      {/* =======================005======================= */}
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Patents</h1>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">An Image Processing Method, Device, Equipment and Storage Medium</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          (Published | CN116342434A) <a href="https://worldwide.espacenet.com/patent/search/family/086876285/publication/CN116342434A?q=pn%3DCN116342434A" target="_blank">[Patentlink]</a><br/>
          <strong>Jiangtao Guo</strong>, Changxin Hu; Dan Li, et al.<br/>
          <em>CASIVISION TECH BEIJING CO LTD, CASIVISION TECH LUOYANG CO LTD, 2023/06</em>
        </p>

      <h2 className="font-medium text-xl mb-1 tracking-tighter">View-independent Feature Disentanglement Based on Contrastive Learning</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          (Published | CN113743499A) <a href="https://worldwide.espacenet.com/patent/search/family/078735157/publication/CN113743499A?q=pn%3DCN113743499A" target="_blank">[Patentlink]</a><br/>
          <strong>Jiangtao Guo</strong>, Jiangzhong Cao; Qingyun Dai, et al.<br/>
          <em>Guangdong University of Technology, 2021/12</em>
        </p>

      <h2 className="font-medium text-xl mb-1 tracking-tighter">Controllable Image Generation Based on Principal Component Analysis in Latent Space</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          (Published | CN113743499A) <a href="https://worldwide.espacenet.com/patent/search?q=pn%3DCN113361659A" target="_blank">[Patentlink]</a><br/>
          Qiliang Zhou, Jiangzhong Cao; Qingyun Dai, Yuqin Lu, <strong>Jiangtao Guo</strong>, et al.<br/>
          <em>Guangdong University of Technology, 2021/07</em>
        </p>

      <h2 className="font-medium text-xl mb-1 tracking-tighter">Multi-view Generation Method Based on Contrastive Learning</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          (Published | CN112598775A) <a href="https://worldwide.espacenet.com/patent/search/family/075200250/publication/CN112598775A?q=pn%3DCN112598775A" target="_blank">[Patentlink]</a><br/>
          Yuqin Lu, Jiangzhong Cao, Qingyun Dai, Qiliang Zhou, <strong>Jiangtao Guo</strong>, et al.<br/>
          <em>Guangdong University of Technology, 2020/12</em>
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <br/><br/>
      </div>
    </section>
  );
}