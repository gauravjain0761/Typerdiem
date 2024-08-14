import { string } from "../i18n/locales/en";
import { getText } from "./commonFunction";

//user event dummy data
export  const listData = [
    {id: 1, name: 'Item A', isSelect: false},
    {id: 2, name: 'Item B', isSelect: false},
    {id: 3, name: 'Item C', isSelect: false},
    {id: 4, name: 'Item D', isSelect: false},
    {id: 5, name: 'Item E', isSelect: false},
    {id: 6, name: 'Item F', isSelect: false},
    {id: 7, name: 'Item G', isSelect: false},
    {id: 8, name: 'Item H', isSelect: false},
    {id: 9, name: 'Item J', isSelect: false},
    {id: 10, name: 'Item K', isSelect: false},
  ];
  
export const dummyData = [
  {
    id: 1,
    title: getText(string.introduction.list1),
    subTitle: getText(string.introduction.listSub1),
  },
  {
    id: 2,
    title: getText(string.introduction.list2),
    subTitle: getText(string.introduction.listSub2),
  },
  {
    id: 3,
    title: getText(string.introduction.list3),
    subTitle: getText(string.introduction.listSub3),
  },
];
