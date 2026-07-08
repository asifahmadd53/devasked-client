import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Communities",
          icon: SquarePen,
          submenus: [
            {
              href: "/communities/my-communities",
              label: "My Communities",
            },
            {
              href: "/communities/all-communities",
              label: "All Communities",
            },
          ],
        },
        {
          href: "/questions",
          label: "Questions",
          icon: Bookmark,
        },
        // {
        //   href: "/tags",
        //   label: "Tags",
        //   icon: Tag,
        // },
        {
          href: "/quizes",
          label: "Quizes",
          icon: Bookmark,
        },
        {
          href: "/trendins",
          label: "Trending",
          icon: Tag,
        },
      ],
    },
    {
      groupLabel: "Personal",
      menus: [
        {
          href: "/bookmarks",
          label: "Bookmarks",
          icon: Users,
        },
        {
          href: "/profile",
          label: "Profile",
          icon: Settings,
        },
        {
          href: "/settings",
          label: "Settings",
          icon: Settings,
        },
      ],
    },
  ];
}
