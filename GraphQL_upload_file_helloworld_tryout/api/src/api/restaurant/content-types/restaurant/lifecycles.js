module.exports = {
  beforeCreate(event) {
    const { result, params } = event;
    console.log("beforeCreate");
  },
  beforeCreateMany(event) {
    const { result, params } = event;
    console.log("beforeCreateMany");
  },
  afterCreate(event) {
    const { result, params } = event;

    console.log("afterCreate");
  },
  afterCreateMany(event) {
    const { result, params } = event;
    console.log("afterCreateMany");
  },
  beforeUpdate(event) {
    const { result, params } = event;
    console.log("beforeUpdate");
  },
  beforeUpdateMany(event) {
    const { result, params } = event;
    console.log("beforeUpdateMany");
  },
  afterUpdate(event) {
    const { result, params } = event;
    console.log("afterUpdate");
  },
  afterUpdateMany(event) {
    const { result, params } = event;
    console.log("afterUpdateMany");
  },
  beforeDelete(event) {
    const { result, params } = event;
    console.log("beforeDelete");
  },
  beforeDeleteMany(event) {
    const { result, params } = event;
    console.log("beforeDeleteMany");
  },
  afterDelete(event) {
    const { result, params } = event;
    console.log({ result, params });
    console.log("afterDelete");
  },
  afterDeleteMany(event) {
    const { result, params } = event;
    console.log("afterDeleteMany");
  },
  beforeCount(event) {
    const { result, params } = event;
    console.log("beforeCount");
  },
  afterCount(event) {
    const { result, params } = event;
    console.log("afterCount");
  },
  beforeFindOne(event) {
    const { result, params } = event;
    console.log("beforeFindOne");
  },
  afterFindOne(event) {
    const { result, params } = event;
    console.log({ result, params });
    console.log("afterFindOne");
  },
  beforeFindMany(event) {
    const { result, params } = event;
    console.log("beforeFindMany");
  },
  afterFindMany(event) {
    const { result, params } = event;
    console.log("afterFindMany");
  },
};
