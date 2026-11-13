import type { Locale, SiteContent } from '../lib/types/content.type';

const WHATSAPP_URL = 'https://wa.me/6281372079915';

export const content: Record<Locale, SiteContent> = {
  en: {
    lang: 'en',
    title: 'Fadhil | Senior Software Engineer Portfolio',
    description:
      'Professional Portfolio Website of a Senior Software Engineer with 6+ years of experience. Building custom digital systems aligned with your business workflows.',
    header: {
      brand: 'Fadhil',
      menu: [
        { label: 'Services', href: '#layanan' },
        { label: 'Portfolio', href: '#portofolio' },
        { label: 'Workflow', href: '#alur-kerja' },
        { label: 'About Me', href: '#tentang-saya' },
        { label: 'ID', href: '/id/' },
      ],
      contact: {
        label: 'Contact',
        href: WHATSAPP_URL,
      },
    },
    hero: {
      title: 'Building Custom Digital Systems Aligned with Your Business Workflows',
      lead: 'Professional software development with industry standards by a Senior Engineer with 6+ years of experience',
      ctaLabel: 'Schedule a Discussion',
      href: WHATSAPP_URL,
    },
    services: {
      title: 'Core Services',
      subtitle: 'Modular solutions for complex business operational needs.',
      items: [
        {
          icon: 'system',
          title: 'Custom Internal Systems',
          description: "Bespoke applications tailored to your company's internal needs.",
        },
        {
          icon: 'automation',
          title: 'Workflow Automation',
          description: 'Eliminate manual bottlenecks with automated workflows.',
        },
        {
          icon: 'dashboard',
          title: 'Digitalized Operations Management',
          description: 'Monitor all business processes in a single integrated dashboard.',
        },
        {
          icon: 'integration',
          title: 'System Integrations',
          description: 'Connecting various third-party platforms into a unified ecosystem.',
        },
      ],
    },
    portfolio: {
      title: 'Featured Portfolio',
      items: [
        {
          title:
            'Assessment System Digitalization: Project Readiness Index for Industrial Transformation',
          description:
            'An integrated custom system that digitalizes corporate assessment processes automatically, helping management map and accelerate industrial transformation.',
          benefits: [
            'Automatic, instant assessment calculations, replacing manual Excel computations.',
            'Instant final report downloads in PDF format, eliminating manual editing in Word.',
            'Centralized analytics dashboard to monitor industrial transformation readiness systematically.',
          ],
          href: 'https://readiness.incit.org',
          ctaLabel: 'View Live Demo',
          image: '/assets/images/project-readiness-index.png',
          imageAlt: 'Screenshot Project Readiness Index',
          imageWidth: 2829,
          imageHeight: 1472,
        },
        {
          title:
            'Residential Management Digitalization: Custom System for Rental Property Transactions',
          description:
            'This custom system helps automate records, making business operations more organized and transparent.',
          benefits: [
            'Real-time tracking of assets and room availability.',
            'Centrally manage tenant information.',
            'Automate payment history records to prevent calculation errors.',
          ],
          href: 'https://kost-app.fadhildev.com',
          ctaLabel: 'View Live Demo',
          image: '/assets/images/project-residential-app.png',
          imageAlt: 'Screenshot Project Residential App',
          imageWidth: 1906,
          imageHeight: 932,
        },
      ],
    },
    workflow: {
      title: 'Professional Workflow',
      items: [
        {
          number: '01',
          title: 'Discovery & Analysis',
          description: 'In-depth discussions to map out your current business workflows.',
        },
        {
          number: '02',
          title: 'Architecture & Design',
          description: 'Designing an intuitive system blueprint that is easy for your staff to use.',
        },
        {
          number: '03',
          title: 'Development & Testing',
          description: 'Coding with industry standards that are stable, secure, and production-ready.',
        },
        {
          number: '04',
          title: 'Handover & Support',
          description:
            'System training and post-release technical support to ensure a smooth transition.',
        },
      ],
    },
    about: {
      title: 'About Me',
      quote: '"The best technology is the technology that grows with your business."',
      body: 'With over 6 years of experience as a Software Engineer, I help business owners and SMEs bridge the gap between business needs and technological solutions. My focus is on building stable, secure, and industry-standard custom systems to ensure long-term efficiency. I prioritize technical integrity, in-depth analysis of your workflows, and system scalability to ensure it is ready to grow alongside your business in the future.',
      emailLabel: 'Email:',
      email: 'fadhilc97@gmail.com',
    },
    footer: {
      copyright: '© 2026 Fadhil. All rights reserved.',
    },
    whatsapp: {
      href: WHATSAPP_URL,
      label: 'Chat on WhatsApp',
    },
  },
  id: {
    lang: 'id',
    title: 'Fadhil | Senior Software Engineer Portofolio',
    description:
      'Website Portofolio Profesional Senior Engineer dengan pengalaman 6+ tahun. Membangun sistem digital kustom yang selaras dengan alur kerja bisnis Anda.',
    header: {
      brand: 'Fadhil',
      menu: [
        { label: 'Layanan', href: '#layanan' },
        { label: 'Portofolio', href: '#portofolio' },
        { label: 'Alur Kerja', href: '#alur-kerja' },
        { label: 'Tentang Saya', href: '#tentang-saya' },
        { label: 'EN', href: '/' },
      ],
      contact: {
        label: 'Kontak',
        href: WHATSAPP_URL,
      },
    },
    hero: {
      title: 'Membangun Sistem Digital Kustom yang Selaras dengan Alur Kerja Bisnis Anda',
      lead: 'Pengembangan software profesional dengan standar industri oleh Senior Engineer berpengalaman 6+ tahun',
      ctaLabel: 'Jadwalkan Diskusi',
      href: WHATSAPP_URL,
    },
    services: {
      title: 'Layanan Utama',
      subtitle: 'Solusi modular untuk kebutuhan operasional bisnis yang kompleks.',
      items: [
        {
          icon: 'system',
          title: 'Sistem Internal Kustom',
          description: 'Aplikasi khusus untuk kebutuhan internal perusahaan Anda.',
        },
        {
          icon: 'automation',
          title: 'Otomatisasi Alur Kerja',
          description: 'Menghilangkan hambatan manual dengan sistem yang bekerja otomatis.',
        },
        {
          icon: 'dashboard',
          title: 'Digitalisasi Manajemen Operasional',
          description: 'Pantau semua proses bisnis dalam satu dashboard terintegrasi.',
        },
        {
          icon: 'integration',
          title: 'Sistem Integrasi',
          description: 'Menghubungkan berbagai platform pihak ketiga ke dalam satu ekosistem.',
        },
      ],
    },
    portfolio: {
      title: 'Portofolio Pilihan',
      items: [
        {
          title:
            'Digitalisasi Sistem Assessment: Project Readiness Index untuk Transformasi Industri',
          description:
            'Sistem kustom terintegrasi yang mendigitalisasi proses assessment perusahaan secara otomatis, membantu manajemen memetakan dan mempercepat langkah transformasi industri.',
          benefits: [
            'Kalkulasi hasil assessment secara otomatis dan instan, menggantikan kalkulasi manual menggunakan Excel.',
            'Laporan hasil akhir instan yang dapat diunduh langsung dalam format PDF, mengeliminasi proses pengeditan manual dengan Word.',
            'Dashboard analitik terpusat untuk memantau kesiapan transformasi industri secara terstruktur.',
          ],
          href: 'https://readiness.incit.org',
          ctaLabel: 'Lihat Live Demo',
          image: '/assets/images/project-readiness-index.png',
          imageAlt: 'Screenshot Project Readiness Index',
          imageWidth: 2829,
          imageHeight: 1472,
        },
        {
          title:
            'Digitalisasi Manajemen Hunian: Sistem Kustom untuk Transaksi Properti Sewa',
          description:
            'Sistem kustom ini membantu mengotomatisasi pendataan agar operasional bisnis menjadi lebih rapi dan transparan.',
          benefits: [
            'Mencatat aset dan ketersediaan kamar secara real-time.',
            'Mendata informasi penghuni secara terpusat.',
            'Otomatisasi pencatatan riwayat pembayaran untuk menghindari salah hitung.',
          ],
          href: 'https://kost-app.fadhildev.com',
          ctaLabel: 'Lihat Live Demo',
          image: '/assets/images/project-residential-app.png',
          imageAlt: 'Screenshot Project Residential App',
          imageWidth: 1906,
          imageHeight: 932,
        },
      ],
    },
    workflow: {
      title: 'Alur Kerja Profesional',
      items: [
        {
          number: '01',
          title: 'Discovery & Analisis',
          description: 'Diskusi mendalam untuk memetakan alur kerja bisnis Anda saat ini.',
        },
        {
          number: '02',
          title: 'Arsitektur & Desain',
          description: 'Merancang cetak biru sistem yang intuitif dan mudah digunakan staf Anda.',
        },
        {
          number: '03',
          title: 'Pengembangan & Pengujian',
          description: 'Coding dengan standar industri yang stabil, aman, dan siap pakai.',
        },
        {
          number: '04',
          title: 'Serah Terima & Dukungan',
          description: 'Pelatihan sistem serta dukungan teknis pasca-rilis agar transisinya mulus.',
        },
      ],
    },
    about: {
      title: 'Tentang Saya',
      quote: '"Teknologi terbaik adalah teknologi yang tumbuh bersama bisnis Anda."',
      body: 'Selama lebih dari 6 tahun berkarier sebagai Software Engineer, saya membantu pemilik usaha dan UMKM menjembatani celah antara kebutuhan bisnis dan solusi teknologi. Fokus saya adalah membangun Sistem Kustom yang stabil, aman, dan dirancang dengan standar industri untuk memastikan efisiensi jangka panjang. Saya mengedepankan integritas teknis, analisis mendalam terhadap alur kerja Anda, dan skalabilitas sistem agar siap berkembang bersama bisnis Anda di masa depan.',
      emailLabel: 'Email:',
      email: 'fadhilc97@gmail.com',
    },
    footer: {
      copyright: '© 2026 Fadhil. Seluruh hak cipta dilindungi.',
    },
    whatsapp: {
      href: WHATSAPP_URL,
      label: 'Chat on WhatsApp',
    },
  },
};
