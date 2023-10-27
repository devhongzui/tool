import SubDistrict from "../../../model/subDistrict.js";

export let show = async () => await SubDistrict.find();

export let search = async (_, args) => {
  let options = {};

  let { name, code, division_type, codename, district_code } = args;

  if (name) options.name = { $regex: name };

  if (code) options.code = parseInt(code);

  if (division_type) options.division_type = { $regex: division_type };

  if (codename) options.codename = { $regex: codename };

  if (district_code) options.district_code = parseInt(district_code);

  if (Object.keys(options).length === 0) {
    return null;
  }

  return await SubDistrict.find(options);
};

export let fulltextSearch = async (_, args) =>
  await SubDistrict.find({ $text: { $search: args.search_query } });
