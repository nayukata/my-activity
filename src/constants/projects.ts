import type { Project } from "src/entities/Project";

export const projects: Project[] = [
  {
    name: "J-Start",
    description: "治験用の電話応対システム",
    technologyStacks: ["Vue.js", "Nest.js", "MySQL"],
  },
  {
    name: "ハウスクリーニング",
    description: `清掃・家事代行サービス\n\n以下の3システムをmonorepoで開発\n・管理者用\n・清掃業者用\n・スタッフ用`,
    technologyStacks: [
      "React",
      "TypeScript",
      "Next.js",
      "Nest.js",
      "Docker",
      "Prisma(PostgreSQL)",
    ],
  },
  {
    name: "スイスイ旅",
    description:
      "道路渋滞や店舗混雑を低減するための自家用車で観光する観光客向けスマートフォンアプリ",
    technologyStacks: ["Flutter", "Firebase", "GCP"],
  },
  {
    name: "Shopify定期購買アプリ(副業)",
    description: "ショップに定期購買機能を追加するアプリ",
    technologyStacks: ["React", "TypeScript", "Shopify", "Prisma(PostgreSQL)"],
  },
  {
    name: "合格発表管理システム(副業)",
    description:
      "受験結果を管理するシステム\n合格発表の・検索・登録・ダウンロードが可能",
    technologyStacks: ["React", "TypeScript", "Next.js", "Prisma(PostgreSQL)"],
  },
];
