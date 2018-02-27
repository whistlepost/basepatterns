const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  entry: './src/main/resources/SLING-INF/content/js/basepatterns.js',
  output: {
    filename: 'resources/main/SLING-INF/content/js/basepatterns.bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
	  {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
		  {
            loader: 'file-loader',
            options: {
            	'outputPath': 'resources/main/SLING-INF/content/images/',
            	'useRelativePath': true,
            	publicPath: '/apps/basepatterns/images/'
			}
          }
	  	]
      },
	  {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
		  {
            loader: 'file-loader',
            options: {
            	'outputPath': 'resources/main/SLING-INF/content/fonts/',
            	'useRelativePath': true,
				publicPath: '/apps/basepatterns/fonts/'
			}
          }
        ]
      },
	  {
        test: require.resolve('jquery'),
        use: [
        	{
			  loader: 'expose-loader',
			  options: 'jQuery'
		    },
		    {
				loader: 'expose-loader',
				options: '$'
			}
		]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("resources/main/SLING-INF/content/css/basepatterns.bundle.css"),
    new GoogleFontsPlugin({
		fonts: [
			{ family: "Roboto" }
		],
		path: 'resources/main/SLING-INF/content/fonts/',
		filename: 'resources/main/SLING-INF/content/css/fonts.css'
	})
  ]
};
