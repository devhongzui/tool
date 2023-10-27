import District from "../../../model/district.js";

export let show = async () => await District.find();

export let search = async (_, args) => {
  let options = {};

  let { name, code, division_type, codename, province_code } = args;

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
  if (province_code) {
    options.province_code = parseInt(province_code);
  }
  if (Object.keys(options).length === 0) {
    return null;
  }

  return await District.find(options);
};

export let fulltextSearch = async (_, args) =>
  await District.find({ $text: { $search: args.search_query } });
