import {
  show as showApiControllerAddressProvinces,
  search as searchApiControllerAddressProvinces,
  fulltextSearch as fullTextSearchApiControllerAddressProvinces,
} from "../../controllers/api/address/provinces.js";
import {
  show as showApiControllerAddressDistricts,
  search as searchApiControllerAddressDistricts,
  fulltextSearch as fullTextSearchApiControllerAddressDistricts,
} from "../../controllers/api/address/districts.js";
import {
  show as showApiControllerAddressSubDistricts,
  search as searchApiControllerAddressSubDistricts,
  fulltextSearch as fullTextSearchApiControllerAddressSubDistricts,
} from "../../controllers/api/address/subDistricts.js";
import { show as showApiControllerRandomString } from "../../controllers/api/randomstring.js";
import { show as showApiControllerMinifyJs } from "../../controllers/api/minify.js";

let resolvers = {
  Query: {
    // Province
    provinces: showApiControllerAddressProvinces,
    province_search: (parent, args) =>
      searchApiControllerAddressProvinces(parent, args),
    province_fulltextsearch: (parent, args) =>
      fullTextSearchApiControllerAddressProvinces(parent, args),

    // District
    districts: showApiControllerAddressDistricts,
    district_search: (parent, args) =>
      searchApiControllerAddressDistricts(parent, args),
    district_fulltextsearch: (parent, args) =>
      fullTextSearchApiControllerAddressDistricts(parent, args),

    // Sub Districts
    sub_districts: showApiControllerAddressSubDistricts,
    sub_district_search: (parent, args) =>
      searchApiControllerAddressSubDistricts(parent, args),
    sub_district_fulltextsearch: (parent, args) =>
      fullTextSearchApiControllerAddressSubDistricts(parent, args),

    // Random String
    random_string: (parent, args) =>
      showApiControllerRandomString(parent, args),
    minify_js: (parent, args) => showApiControllerMinifyJs(parent, args),
  },
};

export default resolvers;
