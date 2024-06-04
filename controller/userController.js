export const fetch = async (req, res) => {
  try {
    res.json("hello world");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
