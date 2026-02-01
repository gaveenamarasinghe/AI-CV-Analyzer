const express = require("express");
const router = express.Router();

/**
 * VAPI Webhook
 * Receives real-time call events from VAPI
 */
router.post(
  "/webhook",
  express.raw({ type: "*/*" }),
  (req, res) => {
    try {
      const payload = req.body.toString();
      const message = JSON.parse(payload);

      // 🔍 Log event type
      console.log("🔊 VAPI Event Type:", message.type);

      switch (message.type) {
        case "call.started":
          console.log("📞 Call started:", message.call?.id);
          break;

        case "call.ended":
          console.log("✅ Call ended:", message.call?.id);
          break;

        case "transcript.updated":
          console.log(
            "📝 Transcript:",
            message.transcript?.text
          );
          break;

        case "speech.started":
          console.log("🗣️ AI started speaking");
          break;

        case "speech.ended":
          console.log("🔇 AI finished speaking");
          break;

        case "error":
          console.error("❌ VAPI Error:", message.error);
          break;

        default:
          console.log("ℹ️ Unhandled VAPI event");
      }

      res.sendStatus(200);
    } catch (err) {
      console.error("❌ VAPI Webhook Parse Error:", err.message);
      res.sendStatus(200); // Always return 200 to VAPI
    }
  }
);

module.exports = router;
