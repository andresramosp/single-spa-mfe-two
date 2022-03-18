<template>
  <div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
    <br />
    {{ dateMoment }}
  </div>
</template>


<script>
import { ElTree } from "element-plus";
import moment from 'moment' 

export default {
  components: [ElTree],
  setup() {
    const handleNodeClick = (data) => {
      console.log(data);
    };

    const data = [
      {
        label: "Level one 1",
        children: [
          {
            label: "Level two 1-1",
            children: [
              {
                label: "Level three 1-1-1",
              },
            ],
          },
        ],
      },
      {
        label: "Level one 2",
        children: [
          {
            label: "Level two 2-1",
            children: [
              {
                label: "Level three 2-1-1",
              },
            ],
          },
          {
            label: "Level two 2-2",
            children: [
              {
                label: "Level three 2-2-1",
              },
            ],
          },
        ],
      },
      {
        label: "Level one 3",
        children: [
          {
            label: "Level two 3-1",
            children: [
              {
                label: "Level three 3-1-1",
              },
            ],
          },
          {
            label: "Level two 3-2",
            children: [
              {
                label: "Level three 3-2-1",
              },
            ],
          },
        ],
      },
    ];

    const defaultProps = {
      children: "children",
      label: "label",
    };

    const dateMoment = moment().format("MMMM Do YYYY, h:mm:ss a");

    return { data, defaultProps, handleNodeClick, dateMoment };
  },
};
</script>