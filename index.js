function anyLength( obj )
{
    if( obj && typeof obj !== 'boolean')
    {
        switch ( typeof obj )
        {
            case "string":
                return obj.length;
                break;
            case "number":
                return obj.toString().length;
                break;
            case "object":
                if( Array.isArray(obj) )
                {
                    return obj.length;
                }
                else
                {
                    return Object.keys(obj).length;
                }
                break;
            default:
                return 0;
                break;
        }
    }
    else
    {
        return 0;
    }
}

module.exports = anyLength;