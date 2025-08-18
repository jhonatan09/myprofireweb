import { Component } from '@angular/core';

type Project = {
  title: string;
  url: string;
  desc: string;
  tags: string[];
  image?: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Identidade / contatos
  name = 'Jhonatan Cardoso Moreira';
  title = 'Frontend Engineer — React • Angular • Next.js';
  location = 'Embu das Artes — São Paulo';
  email = 'jhonatancardoso09@gmail.com';
  phone = '(11) 98842-4176';
  github = 'https://github.com/jhonatan09';
  cvPath = 'assets/Curriculo_Jhonatan_2025.pdf';

  // Sobre mim
  aboutShort =
    'Construo interfaces rápidas, acessíveis e escaláveis, unindo boas práticas de engenharia (tests, CI/CD e monitoramento) com foco em experiência do usuário e impacto no negócio.';

  aboutLong = `Sou desenvolvedor frontend com foco em React, Angular e Next.js, apaixonado por transformar requisitos complexos em produtos simples de usar e fáceis de manter. Trabalho com componentização e design systems, SSR/SSG, state management e integrações robustas.
No dia a dia, priorizo performance (Core Web Vitals), acessibilidade (A11y), testes (unitário/e2e) e pipelines de CI/CD para garantir qualidade contínua. Tenho base sólida em TypeScript e experiência colaborando com backend para entregar APIs bem definidas, autenticação segura e observabilidade em produção. Meu objetivo é acelerar times e produtos, mantendo código claro, previsível e escalável.`;

  // Expertise
  expertiseCards: { title: string; items: string[] }[] = [
    {
      title: 'Frontend',
      items: [
        'React 18, Angular 12+, Next.js 14, TypeScript',
        'RxJS, Redux/RTK, React Query',
        'Angular Material, Tailwind, Styled-components, Storybook',
      ],
    },
    {
      title: 'Arquitetura & Qualidade',
      items: [
        'Design system, componentização, roteamento, i18n',
        'SSR/SSG, otimização de performance (LCP/CLS/TTI)',
        'Testes (RTL/Jest/Vitest/Cypress), Feature Flags, Analytics',
      ],
    },
    {
      title: 'Integrações & Cloud',
      items: [
        'REST/GraphQL, Auth (JWT/OAuth)',
        'Node.js/Express para BFFs e serviços simples',
        'Docker, CI/CD, AWS/Azure, observabilidade (Sentry/Datadog)',
      ],
    },
  ];

  // Projetos
  projects: Project[] = [
    {
      title: 'Gerador de pirâmide de algarismos',
      url: 'https://jhonatan09.github.io/PyramidAsteriskGenerator/',
      desc: 'Ferramenta simples para gerar pirâmides usando algarismos/asteriscos.',
      tags: ['React', 'SCSS', 'JS'],
    },
    {
      title: 'Landing Page — Sports UOL (clone)',
      url: 'https://jhonatan09.github.io/UolTest/',
      desc: 'Página estática inspirada no portal UOL Esportes.',
      tags: ['React', 'SCSS', 'JS'],
    },
    {
      title: 'Landing Page — SpaceX (clone)',
      url: 'https://jhonatan09.github.io/SpaceXTest/',
      desc: 'Landing com foco visual e responsivo.',
      tags: [
        'React',
        'Styled-Component',
        'JS',
        'Axios',
        'Context API',
        'HOOKS',
        'JEST',
        '',
      ],
    },
    {
      title: 'Landing Page — Pokémon (Water Type)',
      url: 'https://jhonatan09.github.io/PokemonsTypeWater/',
      desc: 'Página temática com listagem de Pokémons do tipo água.',
      tags: ['React', 'SCSS', 'JS', 'Axios', 'Context API', 'HOOKS'],
    },
  ];

  // Helpers p/ template
  currentYear = new Date().getFullYear();
  get sanitizedPhone(): string {
    return this.phone.replace(/\D/g, '');
  }
  get whatsappLink(): string {
    return `https://wa.me/55${this.sanitizedPhone}`;
  }

  /** Gera URL de thumbnail (WordPress mshots) */
  getPreview(url: string): string {
    const encoded = encodeURIComponent(url);
    return `https://s.wordpress.com/mshots/v1/${encoded}?w=1200&h=675`;
  }

  /** Se falhar a imagem, oculta pra manter o gradiente */
  onImgError(ev: Event) {
    const img = ev.target as HTMLImageElement | null;
    if (img) img.style.display = 'none';
  }

  // Modal
  previewOpen = false;
  selectedProject: Project | null = null;
  openPreview(p: Project) {
    this.selectedProject = p;
    this.previewOpen = true;
  }
  closePreview() {
    this.previewOpen = false;
    this.selectedProject = null;
  }
}
