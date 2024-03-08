## alpinejs 

This distribution packs alpinejs as a [Hugo module](https://gohugo.io/hugo-modules/).

To use in your project: 

1. Import the module in `hugo.toml`.

    ```toml
    [module]
        [[module.imports]]
            path = 'github.com/etheriamagazine/hugo-mod-jslibs/alpinejs'
    ```

2. Import and use the library in your javascript module

    ```javascript
        import Alpine from '@jslibs/alpinejs.js'
    ```





