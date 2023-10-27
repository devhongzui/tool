import Province from "../../../model/province.js";

export let show = async () => await Province.find();

export let search = async (_, args) => {
  let options = {};

  let { name, code, division_type, codename, phone_code } = args;

  if (name) {
    options.name = { $regex: name };
  }
  if (code) {
    options.code = parseInt(code);
  }
  if (division_type) {
    options.division_type = { $regex: division_type };
  }
  if (codename) {
    options.codename = { $regex: codename };
  }
  if (phone_code) {
    options.phone_code = parseInt(phone_code);
  }
  if (Object.keys(options).length === 0) {
    return null;
  }

  return await Province.find(options);
};

export let fulltextSearch = async (_, args) =>
  await Province.find({ $text: { $search: args.search_query } });
