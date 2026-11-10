export type Locale = 'en' | 'id';

export interface MenuItem {
	label: string;
	href: string;
}

export interface HeaderContent {
	brand: string;
	menu: MenuItem[];
	contact: {
		label: string;
		href: string;
	};
}

export interface HeroContent {
	title: string;
	lead: string;
	ctaLabel: string;
	href: string;
}

export interface CoreServiceItem {
	icon: string;
	title: string;
	description: string;
}

export interface ServicesContent {
	title: string;
	subtitle: string;
	items: CoreServiceItem[];
}

export interface PortfolioItem {
	badge: string;
	title: string;
	description: string;
	benefits: string[];
	href: string;
	ctaLabel: string;
	image: string;
	imageAlt: string;
	delay?: string;
	placeholder?: boolean;
}

export interface PortfolioContent {
	title: string;
	items: PortfolioItem[];
}

export interface WorkflowStep {
	number: string;
	title: string;
	description: string;
}

export interface WorkflowContent {
	title: string;
	items: WorkflowStep[];
}

export interface AboutContent {
	title: string;
	quote: string;
	body: string;
	emailLabel: string;
	email: string;
}

export interface FooterContent {
	copyright: string;
}

export interface WhatsAppContent {
	href: string;
	label: string;
}

export interface SiteContent {
	lang: Locale;
	title: string;
	description: string;
	header: HeaderContent;
	hero: HeroContent;
	services: ServicesContent;
	portfolio: PortfolioContent;
	workflow: WorkflowContent;
	about: AboutContent;
	footer: FooterContent;
	whatsapp: WhatsAppContent;
}
