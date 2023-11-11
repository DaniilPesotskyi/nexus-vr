// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Footer → contacts*
 */
export interface FooterDocumentDataContactsItem {
  /**
   * icon field in *Footer → contacts*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contacts[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"address" | "phone">;

  /**
   * value field in *Footer → contacts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contacts[].value
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  value: prismic.KeyTextField;
}

/**
 * Item in *Footer → socials*
 */
export interface FooterDocumentDataSocialsItem {
  /**
   * icon field in *Footer → socials*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"instagram" | "facebook" | "youtube" | "telegram">;

  /**
   * link field in *Footer → socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Item in *Footer → author*
 */
export interface FooterDocumentDataAuthorItem {
  /**
   * link field in *Footer → author*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.author[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *Footer → author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.author[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * contacts field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contacts[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contacts: prismic.GroupField<Simplify<FooterDocumentDataContactsItem>>;

  /**
   * socials field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<FooterDocumentDataSocialsItem>>;

  /**
   * copy field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copy
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copy: prismic.KeyTextField;

  /**
   * author field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.author[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  author: prismic.GroupField<Simplify<FooterDocumentDataAuthorItem>>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

/**
 * Content for Game documents
 */
interface GameDocumentData {
  /**
   * Quantity field in *Game*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: game.quantity
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  quantity: prismic.NumberField;

  /**
   * Title field in *Game*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: game.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Game*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: game.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Poster field in *Game*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: game.poster
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  poster: prismic.ImageField<never>;
}

/**
 * Game document from Prismic
 *
 * - **API ID**: `game`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GameDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<GameDocumentData>, "game", Lang>;

type HomepageDocumentDataSlicesSlice =
  | BookingSlice
  | RulesSlice
  | GamesSlice
  | AdvantagesSlice
  | HeroSlice;

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | FooterDocument
  | GameDocument
  | HomepageDocument
  | SettingsDocument;

/**
 * Primary content in *Advantages → Primary*
 */
export interface AdvantagesSliceDefaultPrimary {
  /**
   * Subtitle field in *Advantages → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: advantages.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Title field in *Advantages → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: advantages.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Primary content in *Advantages → Items*
 */
export interface AdvantagesSliceDefaultItem {
  /**
   * Icon field in *Advantages → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: advantages.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<"Rotate" | "Lock" | "Online">;

  /**
   * Title field in *Advantages → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: advantages.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Body field in *Advantages → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: advantages.items[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Default variation for Advantages Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AdvantagesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AdvantagesSliceDefaultPrimary>,
  Simplify<AdvantagesSliceDefaultItem>
>;

/**
 * Slice variation for *Advantages*
 */
type AdvantagesSliceVariation = AdvantagesSliceDefault;

/**
 * Advantages Shared Slice
 *
 * - **API ID**: `advantages`
 * - **Description**: Advantages
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AdvantagesSlice = prismic.SharedSlice<
  "advantages",
  AdvantagesSliceVariation
>;

/**
 * Primary content in *Booking → Primary*
 */
export interface BookingSliceDefaultPrimary {
  /**
   * Subtitle field in *Booking → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: booking.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Title field in *Booking → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: booking.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Primary content in *Booking → Items*
 */
export interface BookingSliceDefaultItem {
  /**
   * Calendar field in *Booking → Items*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: booking.items[].calendar
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  calendar: prismic.TimestampField;
}

/**
 * Default variation for Booking Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BookingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BookingSliceDefaultPrimary>,
  Simplify<BookingSliceDefaultItem>
>;

/**
 * Slice variation for *Booking*
 */
type BookingSliceVariation = BookingSliceDefault;

/**
 * Booking Shared Slice
 *
 * - **API ID**: `booking`
 * - **Description**: Booking
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BookingSlice = prismic.SharedSlice<
  "booking",
  BookingSliceVariation
>;

/**
 * Primary content in *Games → Primary*
 */
export interface GamesSliceDefaultPrimary {
  /**
   * Subtitle field in *Games → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: games.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Title field in *Games → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: games.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Primary content in *Games → Items*
 */
export interface GamesSliceDefaultItem {
  /**
   * Game field in *Games → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: games.items[].game
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  game: prismic.ContentRelationshipField<"game">;
}

/**
 * Default variation for Games Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GamesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GamesSliceDefaultPrimary>,
  Simplify<GamesSliceDefaultItem>
>;

/**
 * Slice variation for *Games*
 */
type GamesSliceVariation = GamesSliceDefault;

/**
 * Games Shared Slice
 *
 * - **API ID**: `games`
 * - **Description**: Games
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GamesSlice = prismic.SharedSlice<"games", GamesSliceVariation>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Secondary title field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.secondary_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  secondary_title: prismic.TitleField;

  /**
   * Secondary subtitle field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.secondary_subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  secondary_subtitle: prismic.RichTextField;

  /**
   * Body field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.body_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body_text: prismic.RichTextField;
}

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * Link field in *Hero → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Image field in *Hero → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Rules → Primary*
 */
export interface RulesSliceDefaultPrimary {
  /**
   * Subtitle field in *Rules → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rules.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Title field in *Rules → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: rules.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Primary content in *Rules → Items*
 */
export interface RulesSliceDefaultItem {
  /**
   * Icon field in *Rules → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: rules.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<
    "Lock" | "Alcohol" | "Limit" | "Children" | "Time" | "Pregnant"
  >;

  /**
   * Title field in *Rules → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: rules.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Body field in *Rules → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rules.items[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Default variation for Rules Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RulesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RulesSliceDefaultPrimary>,
  Simplify<RulesSliceDefaultItem>
>;

/**
 * Slice variation for *Rules*
 */
type RulesSliceVariation = RulesSliceDefault;

/**
 * Rules Shared Slice
 *
 * - **API ID**: `rules`
 * - **Description**: Rules
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RulesSlice = prismic.SharedSlice<"rules", RulesSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataContactsItem,
      FooterDocumentDataSocialsItem,
      FooterDocumentDataAuthorItem,
      GameDocument,
      GameDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      AdvantagesSlice,
      AdvantagesSliceDefaultPrimary,
      AdvantagesSliceDefaultItem,
      AdvantagesSliceVariation,
      AdvantagesSliceDefault,
      BookingSlice,
      BookingSliceDefaultPrimary,
      BookingSliceDefaultItem,
      BookingSliceVariation,
      BookingSliceDefault,
      GamesSlice,
      GamesSliceDefaultPrimary,
      GamesSliceDefaultItem,
      GamesSliceVariation,
      GamesSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceVariation,
      HeroSliceDefault,
      RulesSlice,
      RulesSliceDefaultPrimary,
      RulesSliceDefaultItem,
      RulesSliceVariation,
      RulesSliceDefault,
    };
  }
}
