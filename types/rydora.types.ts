export interface LinkItem {
  label: string;
  href: string;
}

export interface ImageItem {
  src: string;
  alt: string;
}

export interface SectionHeading {
  main: string;
  middle?: string;
  highlight?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface GlobalData {
  companyName: string;
  logo: ImageItem;
  contact: {
    address: string;
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    hours: string;
  };
  socials: { name: string; url: string; icon: string }[];
}

export interface HeaderData {
  logo: ImageItem;
  menu: LinkItem[];
  cta: LinkItem & { hrefMobile?: string };
}

export interface HeroFeature {
  title: string;
  text: string;
  icon: string;
}

export interface HeroData {
  badge: string;
  heading: SectionHeading;
  description: string;
  cta: LinkItem;
  image: ImageItem;
  list: HeroFeature[];
}

export interface AboutUsFeature {
  title: string;
  text: string;
  icon: string;
}

export interface AboutUsData {
  badge: string;
  heading: SectionHeading;
  description: string;
  cta: LinkItem;
  image: ImageItem;
  list: AboutUsFeature[];
}

export interface WorkingProcessStep {
  title: string;
  text: string;
}

export interface WorkingProcessData {
  badge: string;
  heading: SectionHeading;
  description: string;
  cta: LinkItem;
  image: ImageItem;
  list: WorkingProcessStep[];
}

export interface WhyChooseUsFeature {
  title: string;
  text: string;
  icon: string;
}

export interface WhyChooseUsData {
  badge: string;
  heading: SectionHeading;
  description: string;
  image: ImageItem;
  leftFeatures: WhyChooseUsFeature[];
  rightFeatures: WhyChooseUsFeature[];
}

export interface ServiceItem {
  slug: string;
  title: string;
  text: string;
  image: string;
  icon: string;
}

export interface ServicesData {
  badge: string;
  heading: SectionHeading;
  description: string;
  cta: LinkItem;
  list: ServiceItem[];
}

export interface FleetItem {
  name: string;
  image: string;
  seats: number;
  transmission: string;
  fuel: string;
}

export interface FleetData {
  badge: string;
  heading: SectionHeading;
  description: string;
  cta: LinkItem;
  list: FleetItem[];
}

export interface BrandItem {
  name: string;
  logo: string;
}

export interface BrandsData {
  badge: string;
  heading: SectionHeading;
  description: string;
  list: BrandItem[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  rating: number;
  quote: string;
}

export interface TestimonialsData {
  badge: string;
  heading: SectionHeading;
  description: string;
  list: TestimonialItem[];
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryData {
  list: GalleryItem[];
}

export interface BlogSidebarData {
  categoriesTitle: string;
  recentBlogsTitle: string;
  cta: {
    image: string;
    badge: string;
    heading: SectionHeading;
    description: string;
    button: LinkItem;
  };
}

export interface BlogNewsData {
  badge: string;
  heading: SectionHeading;
  description: string;
  cta: LinkItem;
  readMore: string;
  sidebar: BlogSidebarData;
}

export interface EnquiryFeature {
  icon: string;
  title: string;
  description: string;
}

export interface EnquiryFormData {
  badge: string;
  heading: SectionHeading;
  description: string;
  list: EnquiryFeature[];
  image: ImageItem;
  form: {
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    carTypePlaceholder: string;
    durationPlaceholder: string;
    pickupPlaceholder: string;
    dropoffPlaceholder: string;
    pickupDatePlaceholder: string;
    returnDatePlaceholder: string;
    messagePlaceholder: string;
    submitText: string;
    privacyText: string;
  };
}

export interface ContactPageData {
  badge: string;
  heading: SectionHeading;
  description: string;
  form: {
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    carTypePlaceholder: string;
    durationPlaceholder: string;
    pickupPlaceholder: string;
    dropoffPlaceholder: string;
    messagePlaceholder: string;
    submitText: string;
    successMessage: string;
  };
}

export interface FooterData {
  bgImage: string;
  logo: ImageItem;
  description: string;
  socials: SocialLink[];
  quickLinks: { title: string; list: LinkItem[] };
  services: { title: string; list: string[] };
  contact: { title: string; list: { icon: string; html: string }[] };
  copyright: string;
  legalLinks: string[];
}

export interface SectionProps<T = any> {
  data?: T;
}

export namespace SectionProps {
  export type Header = { data?: HeaderData };
  export type Hero = { data?: HeroData };
  export type About = { data?: AboutUsData; hideButton?: boolean };
  export type WorkingProcess = { data?: WorkingProcessData };
  export type WhyChooseUs = { data?: WhyChooseUsData };
  export type Services = { data?: ServicesData; showViewAll?: boolean };
  export type Fleet = { data?: FleetData; isGrid?: boolean };
  export type Brands = { data?: BrandsData };
  export type Testimonials = { data?: TestimonialsData };
  export type Gallery = { data?: GalleryData };
  export type BlogNews = { data?: BlogNewsData; limit?: number; categorySlug?: string };
  export type EnquiryForm = { data?: EnquiryFormData };
  export type ContactPage = { data?: ContactPageData };
  export type Footer = { data?: FooterData };
}

// Backward compatibility aliases
export type HeaderProps = SectionProps.Header;
export type HeroProps = SectionProps.Hero;
export type AboutProps = SectionProps.About;
export type WorkingProcessProps = SectionProps.WorkingProcess;
export type WhyChooseUsProps = SectionProps.WhyChooseUs;
export type ServicesProps = SectionProps.Services;
export type FleetProps = SectionProps.Fleet;
export type BrandsProps = SectionProps.Brands;
export type TestimonialsProps = SectionProps.Testimonials;
export type GalleryProps = SectionProps.Gallery;
export type BlogNewsProps = SectionProps.BlogNews;
export type EnquiryFormProps = SectionProps.EnquiryForm;
export type ContactPageProps = SectionProps.ContactPage;
export type FooterProps = SectionProps.Footer;

export interface TemplateComponentRef {
  key: string;
  component: string;
}

export interface RydoraTemplateData {
  categories: {
    Rydora: {
      templateComponents?: {
        [template: string]: {
          shared: { Header: string; Footer: string };
          pages: { [page: string]: { components: TemplateComponentRef[] } };
        };
      };
      sections: {
        Global?: { variants?: { RydoraGlobal1?: GlobalData } };
        Header?: { variants?: { RydoraHeader1?: HeaderData } };
        Hero?: { variants?: { RydoraHero1?: HeroData } };
        AboutUs?: { variants?: { RydoraAboutUs1?: AboutUsData } };
        WorkingProcess?: { variants?: { RydoraWorkingProcess1?: WorkingProcessData } };
        WhyChooseUs?: { variants?: { RydoraWhyChooseUs1?: WhyChooseUsData } };
        Services?: { variants?: { RydoraServices1?: ServicesData } };
        Fleet?: { variants?: { RydoraFleet1?: FleetData } };
        Brands?: { variants?: { RydoraBrands1?: BrandsData } };
        Testimonials?: { variants?: { RydoraTestimonials1?: TestimonialsData } };
        Gallery?: { variants?: { RydoraGallery1?: GalleryData } };
        BlogNews?: { variants?: { RydoraBlogNews1?: BlogNewsData } };
        EnquiryForm?: { variants?: { RydoraEnquiryForm1?: EnquiryFormData } };
        ContactPage?: { variants?: { RydoraContactPage1?: ContactPageData } };
        Footer?: { variants?: { RydoraFooter1?: FooterData } };
      };
    };
  };
}
