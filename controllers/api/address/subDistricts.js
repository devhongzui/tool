import SubDistrict from "../../../model/subDistrict.js";

export function show(_, res) {
  SubDistrict.find()
    .then((succes) => success(succes, res))
    .catch((error) => fail(error, res));
}

export function fulltextSearch(req, res) {
  SubDistrict.find({ $text: { $search: req.params.search_query } })
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
