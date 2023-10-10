import District from "../../../model/district.js";

export function show(_, res) {
  District.find()
    .then((succes) => success(succes, res))
    .catch((error) => fail(error, res));
}

export function search(req, res) {
  let options = {};

  let name = req.query.name;
  let code = req.query.code;
  let division_type = req.query.division_type;
  let codename = req.query.codename;
  let province_code = req.query.province_code;

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
    fail({ message: "Options cannot be empty!" }, res);

    return;
  }

  District.find(options)
    .then((succes) => success(succes, res))
    .catch((error) => fail(error, res));
}

export function fulltextSearch(req, res) {
  District.find({ $text: { $search: req.params.search_query } })
    .then((succes) => success(succes, res))
    .catch((error) => fail(error, res));
}

function success(value, res) {
  res.status(200).json({
    status: "successfully",
    message: "Retrieve data successfully!",
    result: value,
  });
}

function fail(value, res) {
  res.status(200).json({
    status: "failed",
    message: value.message,
    result: null,
  });
}
