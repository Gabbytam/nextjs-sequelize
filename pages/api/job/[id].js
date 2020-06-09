const models = require("../../../models/index");

export default async (req, res) => {
  const {
    query: { id, name },
    method,
    body,
  } = req;
  const slugId = req.query.id;

  switch (method) {
    case "POST":
      return res.json({
        message: "ok post",
      });

    case "PATCH":
      return res.json({
        message: "ok post",
      });

    case "GET":
      const job = await models.jobs.findOne({
        where: {
          slug: slugId,
        },
        include: [
          {
            model: models.users,
            as: "user",
          },
        ],
      });

      res.statusCode = 200;
      return res.json({ data: job });

    default:
      break;
  }
};
