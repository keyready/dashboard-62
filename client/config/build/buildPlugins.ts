import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { BuildOptions } from './config/types';

export function buildPlugins({
    paths,
    isDev,
    apiUrl,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),

        new webpack.ProgressPlugin(),

        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash:6].css',
            chunkFilename: 'css/[name]-[contenthash:6].css',
        }),

        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            LOADING_DELAY: JSON.stringify(500),
        }),

        new Dotenv({ path: paths.env }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        );
    }

    return plugins;
}
