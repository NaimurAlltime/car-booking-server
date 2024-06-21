import { RequestHandler } from "express";
import { IQueryFeatures } from "../interfaces/queryFeatures.interface";

const queryFeatures = (
  documentNumber: "single" | "multiple"
): RequestHandler => {
  return (req, res, next) => {
    // set fileds that wanted
    const fieldsObj: { [key: string]: number } = {};

    // select fields
    if (req.query.fields) {
      let fields = String(req.query.fields);
      fields = fields.split(",").join(" ");

      // create fields object
      fields.split(" ").forEach((el) => {
        fieldsObj[el] = 1;
      });
    }

    // lookup control

    let populate: string;

    if (req.query.populate) {
      populate = String(req.query.populate);
      populate = populate.split(",").join(" ");
    } else {
      populate = "";
    }

    if (documentNumber === "single") {
      const queryFeaturesObj: Partial<IQueryFeatures> = {
        fields: fieldsObj,
        populate,
      };

      req.queryFeatures = queryFeaturesObj;
    } else {
      // set limit and skip to the request
      const page: number = parseInt(req.query.page as string) || 1;
      const limit: number | undefined =
        parseInt(req.query.limit as string) || undefined;
      const skip: number | undefined = limit ? (page - 1) * limit : undefined;
      const searchKey: string = req.query.searchKey
        ? String(req.query.searchKey)
        : "";

      let sort = String(req.query.sort);
      sort = sort.split(",").join(" ");

      // create sort object
      const sortObj: {
        [key: string]: 1 | -1;
      } = {};

      sort.split(" ").forEach((el) => {
        if (el.startsWith("-")) {
          sortObj[el.slice(1)] = -1;
        } else {
          sortObj[el] = 1;
        }
      });

      // get filters
      const query: object = req.query;
      const filters: { [key: string]: number | string | boolean } = {
        ...query,
      };

      const excludedFields = [
        "page",
        "sort",
        "limit",
        "fields",
        "searchKey",
        "populate",
      ];

      excludedFields.forEach((el) => delete filters[el]);

      Object.keys(filters).forEach((key) => {
        if (filters[key] === "true") {
          filters[key] = true;
        } else if (filters[key] === "false") {
          filters[key] = false;
        } else if (Number(filters[key])) {
          filters[key] = Number(filters[key]);
        }
      });

      const queryFeaturesObj: IQueryFeatures = {
        page,
        limit,
        skip,
        fields: fieldsObj,
        filters,
        populate,
        sort: sortObj,
        searchKey,
      };

      req.queryFeatures = queryFeaturesObj;
    }

    next();
  };
};

export default queryFeatures;
