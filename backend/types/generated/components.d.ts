import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    icon: Attribute.Media;
    link: Attribute.Component<'menu.link', true>;
    url: Attribute.String;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface MenuMenuButton extends Schema.Component {
  collectionName: 'components_menu_menu_buttons';
  info: {
    displayName: 'MenuButton';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    type: Attribute.Enumeration<['dark', 'darkest', 'light']>;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
      'menu.menu-button': MenuMenuButton;
      'menu.menu-link': MenuMenuLink;
    }
  }
}
