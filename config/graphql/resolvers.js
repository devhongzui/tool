import {
  show as showAddressProvinces,
  search as searchAddressProvinces,
  fulltextSearch as fullTextSearchAddressProvinces,
} from "../../controllers/api/address/provinces.js";
import {
  show as showAddressDistricts,
  search as searchAddressDistricts,
  fulltextSearch as fullTextSearchAddressDistricts,
} from "../../controllers/api/address/districts.js";
import {
  show as showAddressSubDistricts,
  search as searchAddressSubDistricts,
  fulltextSearch as fullTextSearchAddressSubDistricts,
} from "../../controllers/api/address/subDistricts.js";
import { show as showRandomString } from "../../controllers/api/randomstring.js";
import { show as showMinifyJs } from "../../controllers/api/minify.js";
import { show as showEncodeDeCode } from "../../controllers/api/encode-decode.js";

let resolvers = {
  Query: {
    // Province
    provinces: showAddressProvinces,
    province_search: (parent, args) => searchAddressProvinces(parent, args),
    province_fulltextsearch: (parent, args) =>
      fullTextSearchAddressProvinces(parent, args),

    // District
    districts: showAddressDistricts,
    district_search: (parent, args) => searchAddressDistricts(parent, args),
    district_fulltextsearch: (parent, args) =>
      fullTextSearchAddressDistricts(parent, args),

    // Sub Districts
    sub_districts: showAddressSubDistricts,
    sub_district_search: (parent, args) =>
      searchAddressSubDistricts(parent, args),
    sub_district_fulltextsearch: (parent, args) =>
      fullTextSearchAddressSubDistricts(parent, args),

    // Random String
    random_string: (parent, args) => showRandomString(parent, args),
    // Minify Js
    minify_js: (parent, args) => showMinifyJs(parent, args),
    // Encode Decode
    encode_decode: (parent, args) => showEncodeDeCode(parent, args),
  },
};

export default resolvers;
