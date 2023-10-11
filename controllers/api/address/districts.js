import District from "../../../model/district.js";

export let show = async () => await District.find();

export let search = async (_, args) => {
  let options = {};

  let { name, code, division_type, codename, province_code } = args;

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
  if (province_code != undefined) {
    options.province_code = parseInt(province_code);
  }
  if (Object.keys(options).length === 0) {
    return null;
  }

  return await District.find(options);
};

export let fulltextSearch = async (_, args) =>
  await District.find({ $text: { $search: args.search_query } });
