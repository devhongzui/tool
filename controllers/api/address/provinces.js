import Province from "../../../model/province.js";

export let show = async () => await Province.find();

export let search = async (_, args) => {
  let options = {};

  let { name, code, division_type, codename, phone_code } = args;

  if (name != undefined) {
    options.name = { $regex: name };
  }
  if (code != undefined) {
    options.code = parseInt(code);
  }
  if (division_type != undefined) {
    options.division_type = { $regex: division_type };
  }
  if (codename != undefined) {
    options.codename = { $regex: codename };
  }
  if (phone_code != undefined) {
    options.phone_code = parseInt(phone_code);
  }
  if (Object.keys(options).length === 0) {
    return null;
  }

  return await Province.find(options);
};

export let fulltextSearch = async (_, args) =>
  await Province.find({ $text: { $search: args.search_query } });
