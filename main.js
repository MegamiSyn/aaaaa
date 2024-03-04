const { Bot } = require("grammy");
const { Menu } = require("@grammyjs/menu");

// Create a bot.
const bot = new Bot(process.env.TELEGRAM_TOKEN || "");

// Create a simple menu.
const menu = new Menu("my-menu-identifier")
  .text("A", (ctx) => ctx.reply("You pressed A!")).row()
  .text("B", (ctx) => ctx.reply("You pressed B!"));

  const main = new Menu("root-menu")
  .text("Welcome", (ctx) => ctx.reply("Hi!")).row()
  .submenu("Credits", "credits-menu");

const settings = new Menu("credits-menu")
  .text("Show Credits", (ctx) => ctx.reply("Powered by grammY"))
  .back("Go Back");

// Make it interactive.
bot.use(menu);
bot.use(main);
bot.use(settings);

bot.command("start", async (ctx) => {
  // Send the menu.
  await ctx.reply("Check out this menu:", { reply_markup: menu });
});


bot.command("main", async (ctx) => {
    // Send the menu.
    await ctx.reply("Check out this menu:", { reply_markup: main });
  });

  
bot.command("settings", async (ctx) => {
    // Send the menu.
    await ctx.reply("Check out this menu:", { reply_markup: settings });
  });

bot.start();
