import { LeaderItemType } from "../components/Betting/LeaderItem";
import { DetailedLeaderItemType } from "../components/Betting/ListItem";
import { BorderMenuItemProps } from "../components/Common/Menus/BorderMenuItem";
import { MenuItemType } from "../components/Common/Menus/GeneralMenu";
import { SliderType } from "../components/Explore/BannerSlide";
import { QuestBoxType } from "../components/Quests/QuestBox";
import { GameContentType } from "../pages/Games";
import { BettingBannerType } from "../components/Betting/BettingBanner";
import { ClaimBoxType } from "../components/Quests/ClaimBox";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { levelPassType } from "../components/Quests/QuestProgress";
import { CompassBoxType } from "../components/Quests/CompassBox";

export const LEADERBOARD_SUB_MENUITEMS: BorderMenuItemProps[] = [
  {
    name: "Match On",
    active: true,
    type: "large",
  },
  {
    name: "Live Bets (soon)",
    active: false,
    type: "large",
  },
  {
    name: "Guilds (soon)",
    active: false,
    type: "large",
  },
];

export const QUEST_LEADERBOARD_SUB_MENUITEMS: BorderMenuItemProps[] = [
  {
    name: "Today",
    active: true,
    type: "small",
  },
  {
    name: "This week",
    active: false,
    type: "small",
  },
  {
    name: "All Time",
    active: false,
    type: "small",
  },
];

export const SUB_MENUITEMS: BorderMenuItemProps[] = [
  {
    name: "Events",
    active: true,
    type: "small",
  },
  {
    name: "Leaderboard",
    active: false,
    type: "small",
  },
];

export const SEASON_MENUITEMS: MenuItemType[] = [
  {
    title: "Season1",
    lockFlag: false,
  },
  {
    title: "Season2",
    lockFlag: true,
  },
];

export const LEADERBOARD_MENUITEMS: MenuItemType[] = [
  {
    title: "1/4",
    lockFlag: false,
  },
  {
    title: "2/4",
    lockFlag: false,
  },
  {
    title: "3/4",
    lockFlag: false,
  },
  {
    title: "4/4",
    lockFlag: false,
  },
];

export const GAME_MENU_ITEMS: MenuItemType[] = [
  {
    title: "All Matches",
    lockFlag: false,
  },
  {
    title: "P2P",
    lockFlag: false,
  },
  {
    title: "P2Pool",
    lockFlag: false,
  },
];

export const DETAILED_LEADER_ITEMS: DetailedLeaderItemType[] = [
  {
    date: "28 Aug",
    time: "01:58",
    walletAddress: "Monke2",
    avatarUrl: "/images/betting/bepplee.png",
    score: 1244,
    amount: "155Sei",
    betName: "Ranked #1414",
    rank: 10,
    gameAvatar: "/images/betting/tetris.png",
    timeAge: "15 seconds ago",
  },
  {
    date: "28 Aug",
    time: "01:58",
    walletAddress: "Monke2",
    avatarUrl: "/images/betting/bepplee.png",
    score: 1244,
    amount: "155Sei",
    betName: "Ranked #1414",
    rank: 10,
    gameAvatar: "/images/betting/tetris.png",
    timeAge: "15 seconds ago",
  },
  {
    date: "28 Aug",
    time: "01:58",
    walletAddress: "Monke2",
    avatarUrl: "/images/betting/bepplee.png",
    score: 1244,
    amount: "155Sei",
    betName: "Ranked #1414",
    rank: 10,
    gameAvatar: "/images/betting/tetris.png",
    timeAge: "15 seconds ago",
  },
  {
    date: "28 Aug",
    time: "01:58",
    walletAddress: "Monke2",
    avatarUrl: "/images/betting/bepplee.png",
    score: 1244,
    amount: "155Sei",
    betName: "Ranked #1414",
    rank: 10,
    gameAvatar: "/images/betting/tetris.png",
    timeAge: "15 seconds ago",
  },
  {
    date: "28 Aug",
    time: "01:58",
    walletAddress: "Monke2",
    avatarUrl: "/images/betting/bepplee.png",
    score: 1244,
    amount: "155Sei",
    betName: "Ranked #1414",
    rank: 10,
    gameAvatar: "/images/betting/tetris.png",
    timeAge: "15 seconds ago",
  },
  {
    date: "28 Aug",
    time: "01:58",
    walletAddress: "Monke2",
    avatarUrl: "/images/betting/bepplee.png",
    score: 1244,
    amount: "155Sei",
    betName: "Ranked #1414",
    rank: 10,
    gameAvatar: "/images/betting/tetris.png",
    timeAge: "15 seconds ago",
  },
  {
    date: "28 Aug",
    time: "01:58",
    walletAddress: "Monke2",
    avatarUrl: "/images/betting/bepplee.png",
    score: 1244,
    amount: "155Sei",
    betName: "Ranked #1414",
    rank: 10,
    gameAvatar: "/images/betting/tetris.png",
    timeAge: "15 seconds ago",
  },
];

export const LEADER_SUB_ITEMS: LeaderItemType[] = [
  {
    avatarUrl: "/images/betting/avatars/avatar2.png",
    name: "Gigia",
    score: 6.0,
    type: false,
    no: 2.25,
  },
  {
    avatarUrl: "/images/betting/avatars/avatar2.png",
    name: "Gigia",
    score: 3.2,
    type: false,
    no: 2.25,
  },
  {
    avatarUrl: "/images/betting/avatars/avatar3.png",
    name: "Gigia",
    score: 2.31,
    type: false,
    no: 2.25,
  },
  {
    avatarUrl: "/images/betting/avatars/general.png",
    name: "Gigia",
    score: 12341,
    type: false,
    no: 4,
  },
  {
    avatarUrl: "/images/betting/avatars/general.png",
    name: "Gigia",
    score: 4141,
    type: false,
    no: 5,
  },
  {
    avatarUrl: "/images/betting/avatars/general.png",
    name: "Gigia",
    score: 12341,
    type: false,
    no: 6,
  },
];

export const LEADER_ITEMS: LeaderItemType[] = [
  {
    avatarUrl: "/images/betting/avatars/avatar2.png",
    name: "Gigia",
    score: 24242,
    type: true,
    no: 1,
  },
  {
    avatarUrl: "/images/betting/avatars/avatar2.png",
    name: "Gigia",
    score: 12341,
    type: true,
    no: 2,
  },
  {
    avatarUrl: "/images/betting/avatars/avatar3.png",
    name: "Gigia",
    score: 4141,
    type: true,
    no: 3,
  },
  {
    avatarUrl: "/images/betting/avatars/general.png",
    name: "Gigia",
    score: 12341,
    type: true,
    no: 4,
  },
  {
    avatarUrl: "/images/betting/avatars/general.png",
    name: "Gigia",
    score: 4141,
    type: true,
    no: 5,
  },
  {
    avatarUrl: "/images/betting/avatars/general.png",
    name: "Gigia",
    score: 12341,
    type: true,
    no: 6,
  },
];

export const WEEK_GAMES = [
  {
    bgImg: "/images/betting/week/game1.png",
  },
  {
    bgImg: "/images/betting/week/game2.png",
  },
  {
    bgImg: "/images/betting/week/game3.png",
  },
  {
    bgImg: "/images/betting/week/game4.png",
  },
];

export const HeaderMenuTitles = [
  {
    name: "Explore",
    link: "/",
    content: <HomeIcon />,
  },
  {
    name: "Quests",
    link: "/quests",
    content: <EmojiEventsIcon />,
  },
  {
    name: "Lootbox",
    link: "/lootbox",
    content: <CardGiftcardIcon />,
  },
  {
    name: "Games",
    link: "/games",
    content: <SportsEsportsIcon />,
  },
];

export const EXPLORE_BANNER_SLIDES: SliderType[] = [
  {
    title: "WorldWideWebb",
    backgroundImage: "/images/community/backs/webb.jpeg",
    content: (
      <div>
        Worldwide Webb is an interoperable pixel art MMORPG metaverse game
        giving utility to popular NFT projects. The game uses NFTs for in-game
        avatars, pets, lands, NFT Items , and quests.
      </div>
    ),
    button: "Launch Now",
    path: "https://webb.game/",
  },
  {
    title: "DoubleJump",
    backgroundImage: "/images/community/backs/DoubleJump.png",
    content: (
      <div>
        Double Jump is the first race-to-finish, platform-royale game on Solana!
        Race in a mad dash against other Jumpers across the world to reach the
        finish line first.
      </div>
    ),
    button: "Launch Now",
    path: "https://theportal.to/",
  },
  {
    title: "AaveGotchi",
    backgroundImage: "/images/community/backs/Aave.gif",
    content: (
      <div>
        A yield-generating NFT that doubles as a digital pet. Take care of them,
        and they’ll take care of you ^_^
      </div>
    ),
    button: "Launch Now",
    path: "https://ev.io",
  },
  {
    title: "OnCyber",
    backgroundImage: "/images/community/backs/Oncyber.png",
    content: (
      <div>
        A multiverse for creators, oncyber is the easiest way for artists and
        collectors to show their digital assets (NFTs) in fully immersive
        experiences (3D/VR), for free. Holding an item from any of these
        collections allows you to use it as a 3D exhibition space.
      </div>
    ),
    button: "Launch Now",
    path: "https://miniroyale.io",
  },
  {
    title: "Decentraland",
    backgroundImage: "/images/community/backs/Dece.png",
    content: (
      <div>
        Decentraland is an Ethereum blockchain-powered virtual world, developed
        and owned by its users, who can create, experience, and monetize content
        and applications. Join a growing community of virtual world inhabitants.
      </div>
    ),
    button: "Launch Now",
    path: "https://home.panzerdogs.io/",
  },
];

[
  [0, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0],
];

export const QUESTIFY_QUESTS: QuestBoxType[] = [
  {
    index: 1,
    title: "Discord Boost",
    subTitle: "Daily Login",
    description: "Booster of Questify discord server",
    avatar: "/images/quests/avatars/discord.png",
    icon: "/images/quests/xp.png",
    amount: 200,
    thumbnail: "/images/quests/solarity-quests/solarity-discord.png",
    fullDescription: "This is Daily Quest. Check and play everyday!!!",
    untilClaim: 1,
  },
  {
    index: 2,
    title: "Join Discord",
    subTitle: "x5 Login",
    description: "Get a Discord Role and introduce yourself",
    avatar: "/images/social/twitter.png",
    icon: "/images/quests/xp.png",
    amount: 50,
    thumbnail: "/images/quests/solarity-quests/mint-room.png",
    fullDescription:
      "Login the site eacy days for 5 days Consecutively. Try!!!",
    untilClaim: 1,
  },
  {
    index: 3,
    title: "Twitter follow",
    subTitle: "x5 Deposit",
    description: "Follow us on the Twitter",
    avatar: "/images/social/twitter.png",
    icon: "/images/quests/xp.png",
    amount: 50,
    thumbnail: "/images/quests/solarity-quests/mint-room.png",
    fullDescription:
      "Deposit more than 5 times, then you can claim your quests",
    untilClaim: 1,
  },

  {
    index: 4,
    title: "Daily Connect",
    subTitle: "20sei Deposit",
    description: "Connect to zealy and claim everyday",
    avatar: "/images/social/twitter.png",
    icon: "/images/quests/xp.png",
    amount: 20,
    thumbnail: "/images/quests/solarity-quests/mint-room.png",
    fullDescription:
      "Total amount of deposit value should be 20 sei, then calim your big quest",
    untilClaim: 1,
  },
  {
    index: 5,
    title: "Daily Login",
    subTitle: "Daily Login",
    description: "Login EveryDay to complete",
    avatar: "/images/quests/avatars/discord.png",
    icon: "/images/quests/xp.png",
    amount: 50,
    thumbnail: "/images/quests/solarity-quests/solarity-discord.png",
    fullDescription: "This is Daily Quest. Check and play everyday!!!",
    untilClaim: 1,
  },
  {
    index: 6,
    title: "Weekly Streak",
    subTitle: "x5 Login",
    description: "Login Everyday for a week to complete",
    avatar: "/images/social/twitter.png",
    icon: "/images/quests/xp.png",
    amount: 300,
    thumbnail: "/images/quests/solarity-quests/mint-room.png",
    fullDescription:
      "Login the site eacy days for 5 days Consecutively. Try!!!",
    untilClaim: 7,
  },
  {
    index: 7,
    title: "First Deposit",
    subTitle: "x5 Deposit",
    description: "Deposit some Sei in your Questify Balance",
    avatar: "/images/social/twitter.png",
    icon: "/images/quests/xp.png",
    amount: 50,
    thumbnail: "/images/quests/solarity-quests/mint-room.png",
    fullDescription:
      "Deposit more than 5 times, then you can claim your quests",
    untilClaim: 1,
  },

  {
    index: 8,
    title: "x5 Deposit",
    subTitle: "20sei Deposit",
    description: "Deposit 5 times on your Questify Balance",
    avatar: "/images/social/twitter.png",
    icon: "/images/quests/xp.png",
    amount: 200,
    thumbnail: "/images/quests/solarity-quests/mint-room.png",
    fullDescription:
      "Total amount of deposit value should be 20 sei, then calim your big quest",
    untilClaim: 5,
  },
  {
    index: 8,
    title: "Lay the bricks",
    subTitle: "Daily Play",
    description: "Play 1 game of Tetrisk at any level",
    avatar: "/images/social/twitter.png",
    icon: "/images/quests/xp.png",
    amount: 20,
    thumbnail: "/images/quests/solarity-quests/mint-room.png",
    fullDescription: "Play the game everyday and you could claim your quests.",
    untilClaim: 1,
  },
  {
    index: 10,
    title: "Weekly Streak",
    subTitle: "x5 Days play",
    description: "Play everyday for a week to complete",
    avatar: "/images/social/twitter.png",
    icon: "/images/quests/xp.png",
    amount: 100,
    thumbnail: "/images/quests/solarity-quests/mint-room.png",
    fullDescription:
      "Play the game 5 days consecutively to claim your quests. Try!!!",
    untilClaim: 7,
  },
  {
    index: 11,
    title: "x10 games",
    subTitle: "x10 Play",
    description: "Play 10 total games of Tetrisk",
    avatar: "/images/social/twitter.png",
    icon: "/images/quests/xp.png",
    amount: 100,
    thumbnail: "/images/quests/solarity-quests/mint-room.png",
    fullDescription:
      "Play the game more than 10 times to claim your quests. Try!!!",
    untilClaim: 10,
  },
  {
    index: 12,
    title: "Play Easy",
    subTitle: "Play Easy",
    description: "Play Tetrisk on Easy Level",
    avatar: "/images/quests/avatars/extension.png",
    icon: "/images/quests/xp.png",
    amount: 50,
    thumbnail: "/images/quests/solarity-quests/extension.png",
    fullDescription: "You could claim your quests after your first win. Try!!!",
    untilClaim: 1,
  },
  {
    index: 13,
    title: "Play Medium",
    subTitle: "Play Medium",
    description: "Play Tetrisk on Medium Level",
    avatar: "/images/quests/avatars/prompt.png",
    icon: "/images/quests/xp.png",
    amount: 50,
    thumbnail: "/images/quests/solarity-quests/prompt.png",
    fullDescription: "Win more than 5 times and cliam your quests. Try!!!",
    untilClaim: 1,
  },
  {
    index: 14,
    title: "Play Hard",
    subTitle: "Play Hard",
    description: "Plaly Tetrisk on Hard Level",
    avatar: "/images/quests/avatars/prompt.png",
    icon: "/images/quests/xp.png",
    amount: 50,
    thumbnail: "/images/quests/solarity-quests/prompt.png",
    fullDescription:
      "Play the game on easy level and claim your quests. Try!!!",
    untilClaim: 1,
  },
  {
    index: 15,
    title: "Winner",
    subTitle: "Win the game on any level",
    description: "Win the game at any level",
    avatar: "/images/quests/avatars/prompt.png",
    icon: "/images/quests/xp.png",
    amount: 50,
    thumbnail: "/images/quests/solarity-quests/prompt.png",
    fullDescription:
      "Play the game on medium level and claim your quests. Try!!!",
    untilClaim: 1,
  },
];

export const GAME_CONTENTS: GameContentType[] = [
  {
    id: 1,
    title: "Tetrisk",
    link: "/tetrisk",
    thumbnail: "/images/games/thumbnail/Tetris.png",
    thumbnailBig: "/images/betting/sub-bet.png",
    iframeUrl: "https://questify-tetrisk.web.app",
    description:
      "The classic four-block puzzle game..with a degen twist. Are you really willing to risk it and put your money where your 🟪🟪🟪🟪 is?",
  },
];

export const BETTING_BANNER_ITEMS: BettingBannerType[] = [
  {
    index: 1,
    title: "Tetrisk is here!",
    backgroundImage: "/images/betting/tile.svg",
    content:
      "Damage with Legendary Weapons. Play now to earn infinite rewards, and claim your airdrop!",
    button: "Launch Now",
    iframeUrl: "https://questify-tetrisk.web.app",
    link: "/tetrisk",
  },
  // {
  //   index: 2,
  //   title: "Subway Surfing is here!",
  //   backgroundImage: "/images/games/thumbnail/subway.png",
  //   content:
  //     "Damage with Legendary Weapons. Play now to earn infinite rewards, and claim your airdrop!",
  //   button: "Launch Now",
  //   iframeUrl: "https://subway-surfers.org/surf-fantasy-fest/",
  //   link: "/subway",
  // },
  // {
  //   index: 3,
  //   title: "Tower Building is here!",
  //   backgroundImage: "/images/games/thumbnail/Tower.png",
  //   content:
  //     "Damage with Legendary Weapons. Play now to earn infinite rewards, and claim your airdrop!",
  //   button: "Launch Now",
  //   iframeUrl: "https://iamkun.github.io/tower_game/",
  //   link: "/towerbuilding",
  // },
  // {
  //   index: 4,
  //   title: "2048 is here!",
  //   backgroundImage: "/images/games/thumbnail/2048.png",
  //   content:
  //     "Damage with Legendary Weapons. Play now to earn infinite rewards, and claim your airdrop!",
  //   button: "Launch Now",
  //   iframeUrl: "https://play2048.co/",
  //   link: "/2048",
  // },
];

export const CLAIM_BOX_ITEMS: ClaimBoxType[] = [
  {
    category: "Questify",
    active: 1,
    amount: 500,
    title: "Compass",
    description: "You won a passport, claim it now!",
    thumbnail: "/images/logos/departLogo.png",
  },
  {
    category: "Questify",
    active: 1,
    amount: 500,
    title: "Tetrisk WL",
    description: "You won a passport, claim it now!",
    thumbnail: "/images/logos/departLogo.png",
  },
  {
    category: "Questify",
    active: 1,
    amount: 500,
    title: "Compass",
    description: "You won a passport, claim it now!",
    thumbnail: "/images/logos/departLogo.png",
  },
  {
    category: "Questify",
    active: 1,
    amount: 500,
    title: "Compass",
    description: "You won a passport, claim it now!",
    thumbnail: "/images/logos/departLogo.png",
  },
];

export const LEVEL_PASS_NUMS: levelPassType[] = [
  // { number: 1, passed: true },
  { number: 2, passed: true },
  { number: 3, passed: true },
  { number: 4, passed: true },
  { number: 5, passed: true },
];

export const COMPASS_BOX_FREE: CompassBoxType[] = [
  {
    index: 1,
    free: true,
    // opened: true,
    title: "100 $QST",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 2,
    free: true,
    // opened: true,
    title: "100 $QST",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 3,
    free: true,
    // opened: false,
    title: "Limited NFT Card",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 4,
    free: true,
    // opened: false,
    title: "100 $BLOCK",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 5,
    free: true,
    // opened: false,
    title: "Limited NFT Card",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 6,
    free: true,
    // opened: false,
    title: "100 $QST",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 7,
    free: true,
    // opened: false,
    title: "100 $QST",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 8,
    free: true,
    // opened: false,
    title: "Limited NFT Card",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 9,
    free: true,
    // opened: false,
    title: "100 $BLOCK",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 10,
    free: true,
    // opened: false,
    title: "Limited NFT Card",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
];

export const COMPASS_BOX_COMPASS: CompassBoxType[] = [
  {
    index: 1,
    free: false,
    opened: false,
    title: "LootBox Key",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 2,
    free: false,
    opened: false,
    title: "200 $QST",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 3,
    free: false,
    opened: false,
    title: "LootBox Key",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 4,
    free: false,
    opened: false,
    title: "200 $BLOCK",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 5,
    free: false,
    opened: false,
    title: "LootBox Key",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 6,
    free: false,
    opened: false,
    title: "LootBox Key",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 7,
    free: false,
    opened: false,
    title: "200 $QST",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 8,
    free: false,
    opened: false,
    title: "LootBox Key",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 9,
    free: false,
    opened: false,
    title: "200 $BLOCK",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
  {
    index: 10,
    free: false,
    opened: false,
    title: "LootBox Key",
    activeThumbnail: "/images/quests/compass_box/test.png",
    inactiveThumbnail: "/images/quests/compass_box/test_false.png",
  },
];

export const LOOTBOX_CARD_BRONZE: any = [
  {
    id: 1,
    img: "/images/Lootbox/tokens/seinu.jpeg",
    name: "Seinu",
    value: "$300",
    selected: false,
    percent: "18%",
  },
  {
    id: 2,
    img: "/images/Lootbox/tokens/stars.png",
    name: "QST Stars",
    value: "333",
    selected: false,
    percent: "20%",
  },
  {
    id: 3,
    img: "/images/Lootbox/tokens/wolf.jpg",
    name: "$WOLF",
    value: "$10",
    selected: false,
    percent: "12%",
  },
  {
    id: 4,
    img: "/images/Lootbox/tokens/SMT.jpeg",
    name: "$SMT",
    value: "4.17$",
    selected: false,
    percent: "10%",
  },
  {
    id: 5,
    img: "/images/Lootbox/tokens/SAPE.png",
    name: "$SAPE",
    value: "$1.25",
    selected: false,
    percent: "5%",
  },
  {
    id: 6,
    img: "/images/Lootbox/tokens/SEI.png",
    name: "$SEI",
    value: "$8.33",
    selected: false,
    percent: "2.5%",
  },
  {
    id: 7,
    img: "/images/Lootbox/tokens/Gafin.svg",
    name: "Gafin",
    value: "42",
    selected: false,
    percent: "2.5%",
  },
  {
    id: 8,
    img: "/images/Lootbox/NFTs/SeiApes.jpg",
    name: "NFT",
    value: "Sei Ape Punks",
    selected: false,
    percent: "5%",
  },
  {
    id: 9,
    img: "/images/Lootbox/NFTs/BigPunk.jpg",
    name: "NFT",
    value: "BigPunk",
    selected: false,
    percent: "5%",
  },
  {
    id: 10,
    img: "/images/Lootbox/NFTs/SeiGulls.jpg",
    name: "NFT",
    value: "SeiGulls",
    selected: false,
    percent: "5%",
  },
  {
    id: 11,
    img: "/images/Lootbox/NFTs/Cybers.jpg",
    name: "NFT",
    value: "CyberLabs OGs",
    selected: false,
    percent: "5%",
  },
  {
    id: 12,
    img: "/images/Lootbox/NFTs/ComicPass.jpeg",
    name: "NFT",
    value: "Comic Pass",
    selected: false,
    percent: "4%",
  },
  {
    id: 13,
    img: "/images/Lootbox/NFTs/WTFoxes.jpg",
    name: "NFT",
    value: "WTFoxes",
    selected: false,
    percent: "4%",
  },
  {
    id: 14,
    img: "/images/Lootbox/NFTs/Cybers.jpg",
    name: "NFT",
    value: "CyberLabs Free",
    selected: false,
    percent: "1%",
  },
  {
    id: 15,
    img: "/images/Lootbox/NFTs/webot.png",
    name: "NFT",
    value: "WebBot Free",
    selected: false,
    percent: "0.5%",
  },
  {
    id: 16,
    img: "/images/Lootbox/NFTs/SeiGoat.jpg",
    name: "NFT",
    value: "SeiGoat Free",
    selected: false,
    percent: "0.5%",
  },
];

export const LOOTBOX_CARD_SILVER: any = [
  {
    id: 1,
    img: "/images/Lootbox/tokens/seinu.jpeg",
    name: "Seinu",
    value: "$500",
    selected: false,
    percent: "15%",
  },
  {
    id: 2,
    img: "/images/Lootbox/tokens/stars.png",
    name: "QST Stars",
    value: "500",
    selected: false,
    percent: "15%",
  },
  {
    id: 3,
    img: "/images/Lootbox/tokens/wolf.jpg",
    name: "$WOLF",
    value: "$16667",
    selected: false,
    percent: "10%",
  },
  {
    id: 4,
    img: "/images/Lootbox/tokens/SMT.jpeg",
    name: "$SMT",
    value: "8.33$",
    selected: false,
    percent: "10%",
  },
  {
    id: 5,
    img: "/images/Lootbox/tokens/SAPE.png",
    name: "$SAPE",
    value: "$2.5",
    selected: false,
    percent: "5%",
  },
  {
    id: 6,
    img: "/images/Lootbox/tokens/SEI.png",
    name: "$SEI",
    value: "$17.07",
    selected: false,
    percent: "2.5%",
  },
  {
    id: 7,
    img: "/images/Lootbox/tokens/Gafin.svg",
    name: "Gafin",
    value: "83.33",
    selected: false,
    percent: "2.5%",
  },
  {
    id: 8,
    img: "/images/Lootbox/NFTs/SeiApes.jpg",
    name: "NFT",
    value: "Sei Ape Punks",
    selected: false,
    percent: "6%",
  },
  {
    id: 9,
    img: "/images/Lootbox/NFTs/BigPunk.jpg",
    name: "NFT",
    value: "BigPunk",
    selected: false,
    percent: "6%",
  },
  {
    id: 10,
    img: "/images/Lootbox/NFTs/SeiGulls.jpg",
    name: "NFT",
    value: "SeiGulls",
    selected: false,
    percent: "6%",
  },
  {
    id: 11,
    img: "/images/Lootbox/NFTs/Cybers.jpg",
    name: "NFT",
    value: "CyberLabs OGs",
    selected: false,
    percent: "6%",
  },
  {
    id: 12,
    img: "/images/Lootbox/NFTs/ComicPass.jpeg",
    name: "NFT",
    value: "Comic Pass",
    selected: false,
    percent: "5%",
  },
  {
    id: 13,
    img: "/images/Lootbox/NFTs/WTFoxes.jpg",
    name: "NFT",
    value: "WTFoxes",
    selected: false,
    percent: "5%",
  },
  {
    id: 14,
    img: "/images/Lootbox/NFTs/Cybers.jpg",
    name: "NFT",
    value: "CyberLabs Free",
    selected: false,
    percent: "2%",
  },
  {
    id: 15,
    img: "/images/Lootbox/NFTs/webot.png",
    name: "NFT",
    value: "WebBot Free",
    selected: false,
    percent: "2%",
  },
  {
    id: 16,
    img: "/images/Lootbox/NFTs/SeiGoat.jpg",
    name: "NFT",
    value: "SeiGoat Free",
    selected: false,
    percent: "2%",
  },
];

export const LOOTBOX_CARD_GOLD: any = [
  {
    id: 1,
    img: "/images/Lootbox/tokens/seinu.jpeg",
    name: "Seinu",
    value: "$100,000",
    selected: false,
    percent: "10%",
  },
  {
    id: 2,
    img: "/images/Lootbox/tokens/stars.png",
    name: "QST Stars",
    value: "1000,000",
    selected: false,
    percent: "10%",
  },
  {
    id: 3,
    img: "/images/Lootbox/tokens/wolf.jpg",
    name: "$WOLF",
    value: "$50",
    selected: false,
    percent: "10%",
  },
  {
    id: 4,
    img: "/images/Lootbox/tokens/SMT.jpeg",
    name: "$SMT",
    value: "25$",
    selected: false,
    percent: "10%",
  },
  {
    id: 5,
    img: "/images/Lootbox/tokens/SAPE.png",
    name: "$SAPE",
    value: "$5",
    selected: false,
    percent: "10%",
  },
  {
    id: 6,
    img: "/images/Lootbox/tokens/SEI.png",
    name: "$SEI",
    value: "$100",
    selected: false,
    percent: "5%",
  },
  {
    id: 7,
    img: "/images/Lootbox/tokens/Gafin.svg",
    name: "Gafin",
    value: "500",
    selected: false,
    percent: "5%",
  },
  {
    id: 8,
    img: "/images/Lootbox/NFTs/SeiApes.jpg",
    name: "NFT",
    value: "Sei Ape Punks",
    selected: false,
    percent: "5%",
  },
  {
    id: 9,
    img: "/images/Lootbox/NFTs/BigPunk.jpg",
    name: "NFT",
    value: "BigPunk",
    selected: false,
    percent: "5%",
  },
  {
    id: 10,
    img: "/images/Lootbox/NFTs/SeiGulls.jpg",
    name: "NFT",
    value: "SeiGulls",
    selected: false,
    percent: "5%",
  },
  {
    id: 11,
    img: "/images/Lootbox/NFTs/Cybers.jpg",
    name: "NFT",
    value: "CyberLabs OGs",
    selected: false,
    percent: "5%",
  },
  {
    id: 12,
    img: "/images/Lootbox/NFTs/ComicPass.jpeg",
    name: "NFT",
    value: "Comic Pass",
    selected: false,
    percent: "7%",
  },
  {
    id: 13,
    img: "/images/Lootbox/NFTs/WTFoxes.jpg",
    name: "NFT",
    value: "WTFoxes",
    selected: false,
    percent: "7%",
  },
  {
    id: 14,
    img: "/images/Lootbox/NFTs/Cybers.jpg",
    name: "NFT",
    value: "CyberLabs Free",
    selected: false,
    percent: "2%",
  },
  {
    id: 15,
    img: "/images/Lootbox/NFTs/webot.png",
    name: "NFT",
    value: "WebBot Free",
    selected: false,
    percent: "2%",
  },
  {
    id: 16,
    img: "/images/Lootbox/NFTs/SeiGoat.jpg",
    name: "NFT",
    value: "SeiGoat Free",
    selected: false,
    percent: "2%",
  },
];

export const KEYS_CONTENT: any = [
  {
    id: 0,
    img: "/images/Lootbox/bronze_key.png",
    thumbnail: "/images/Lootbox/big_bronze_key.png",
    name: "Bronze key",
    value: 3,
    totalAmount: 6000,
    price: 1,
  },
  {
    id: 1,
    img: "/images/Lootbox/silver_key.png",
    thumbnail: "/images/Lootbox/big_silver_key.png",
    name: "Silver key",
    value: 1,
    totalAmount: 3000,
    price: 2,
  },
  {
    id: 2,
    img: "/images/Lootbox/gold_key.png",
    thumbnail: "/images/Lootbox/big_gold_key.png",
    name: "Gold key",
    value: 2,
    totalAmount: 1000,
    price: 10,
  },
];
