import { convertStringToEnum } from './enums';

describe('utils/enums', () => {
  describe('convertStringToEnum', () => {
    describe('string enum', () => {
      enum StringEnum {
        One = '1',
        Two = '2',
      }

      it('should convert "1" to ExampleEnum.One', () => {
        expect(convertStringToEnum(StringEnum, '1')).toBe(StringEnum.One);
      });

      it('should convert "2" to ExampleEnum.Two', () => {
        expect(convertStringToEnum(StringEnum, '2')).toBe(StringEnum.Two);
      });

      it('should convert "3" to null', () => {
        expect(convertStringToEnum(StringEnum, '3')).toBe(null);
      });

      it('should convert 1 to null', () => {
        expect(convertStringToEnum(StringEnum, 1)).toBe(null);
      });
    });

    describe('numberic enum', () => {
      enum NumbericEnum {
        One = 1,
        Two = 2,
      }

      it('should convert 1 to ExampleEnum.One', () => {
        expect(convertStringToEnum(NumbericEnum, 1)).toBe(NumbericEnum.One);
      });

      it('should convert 2 to ExampleEnum.Two', () => {
        expect(convertStringToEnum(NumbericEnum, 2)).toBe(NumbericEnum.Two);
      });

      it('should convert 3 to null', () => {
        expect(convertStringToEnum(NumbericEnum, 3)).toBe(null);
      });

      it('should convert "1" to null', () => {
        expect(convertStringToEnum(NumbericEnum, '1')).toBe(null);
      });
    });
  });
});
