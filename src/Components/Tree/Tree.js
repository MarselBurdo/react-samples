/*
Представим, что наше API умеет отдавать только непосредственных детей узла
Но нам необходимо построить все дерево результатов и вывести его с помощью библиотеки antd
Сейчас выводится только то, что было в корне дерева - мартышка, рыба и кролик
Поскольку у мартышки и рыбы нет поля isLeaf, то они отображаются, как узлы с наличием детей
Мы хотим, чтобы по клику, например, на мартышку посылался запрос на ее детей (человек, горилла, шимпанзе)
и они отображались в поддереве мартышки - и так далее
*/
import React from "react";
import styles from "../State/State.module.css";

import { Tree } from "antd";
import API from "./api";

const updateNode = (key, list, children) => {
  // code here...

  return list;
};

export const TreeComponent = () => {
  const [tree, setTree] = React.useState([]);
  React.useEffect(() => {
    API.fetch("root").then(setTree);
  }, []);

  const handleLoad = ({ key, children }) => {
    if (children) return;

    return API.fetch(key).then((children) =>
      setTree((prev) => updateNode(key, prev, children))
    );
  };

  return (
    <Tree
      loadData={handleLoad}
      treeData={tree}
      className={styles.container}
      onClick={console.log}
    />
  );
};
