import axios from "axios";

export default async function handler(req, res) {
  try {
    const { aadhaar, key } = req.query;

    if (!aadhaar || !key) {
      return res.status(400).json({
        status: false,
        message: "Missing parameters",
        dev_credit: "@mynk_mynk_mynk",
        credit: "@mynk_mynk_mynk"
      });
    }

    const url = `https://family.asapiservices.workers.dev/anshapi/familyinfo/?aadhaar=${aadhaar}&key=${key}`;

    const response = await axios.get(url);

    return res.status(200).json({
      ...response.data,

      dev_credit: "@mynk_mynk_mynk",
      credit: "@mynk_mynk_mynk"
    });

  } catch (err) {
    return res.status(500).json({
      status: false,
      error: "Server Error",
      dev_credit: "@mynk_mynk_mynk",
      credit: "@mynk_mynk_mynk"
    });
  }
}
