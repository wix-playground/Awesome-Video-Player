import 'babel-polyfill';
import wixRenderer from '@wix/wix-renderer';
import wixRunMode from '@wix/wix-run-mode';
import wixExpressRenderingModel from '@wix/wix-express-rendering-model';

module.exports = (app, context) => {
  const config = context.config.load('wix-stack1');

  app.get('/', wrapAsync(async (req, res) => {
    const templatePath = './src/index.ejs';
    const data = {title: 'Wix Full Stack Project Boilerplate'};

    const renderModel = await wixExpressRenderingModel.generate(req, config);
    const html = await wixRenderer.render(templatePath, renderModel, data, wixRunMode.isProduction());

    res.send(html);
  }));

  return app;
};

function wrapAsync(asyncFn) {
  return (req, res, next) => asyncFn(req, res, next).catch(next);
}
