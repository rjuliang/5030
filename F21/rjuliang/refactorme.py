import unicodedata

class LowerCaseWord:

  def __init__(self, word, bcpCode):
    self.word = word
    self.language = bcpCode

  def toLower(self):
    UPPERCASE_I = '\u0049'#I
    LOWERCASE_DOTLESS_I = '\u0131'#ı
    UPPERCASE_ZIGMA = '\u03a3'#Σ
    LOWERCASE_ZIGMA = '\u03c2'#ς
    submittedWord = self.word

    language = CheckDashParsingOnLng.getLanguage(self.language)
     
    if len(language)<2 or len(language)>3:
      print("Invalid BCP-47 code for word:",submittedWord)
      raise ValueError("Invalid Language")
    
    if language=='zh' or language=='ja' or language=='th':
      return submittedWord
    elif language=='ga':
      return ProcessIrishWord.lowerCaseIrishSpecial(submittedWord)
    elif language=='tr' or language=='az':
      modifiedWord = submittedWord.replace(UPPERCASE_I,LOWERCASE_DOTLESS_I) 
      return modifiedWord.lower()
    elif language=='el':
      if submittedWord[-1]== UPPERCASE_ZIGMA:
        modifiedWord = submittedWord[:-1]+LOWERCASE_ZIGMA   
      return modifiedWord.lower()
    else:
      return submittedWord.lower()



class CheckDashParsingOnLng:

  def getLanguage(language):
    if '-' in language:
      dashPosition = language.find('-')
      return language[0:dashPosition]
    else:
      return language


class ProcessIrishWord:

  def lowerCaseIrishSpecial(submittedWord):
    UPPERCASE_VOWELS = 'AEIOU\u00c1\u00c9\u00cd\u00d3\u00da' #ÁÉÍÓÚ
    if len(submittedWord)>1:
      if (submittedWord[0]=='t' or submittedWord[0]=='n') and unicodedata.normalize('NFC', submittedWord)[1] in UPPERCASE_VOWELS:
        modifiedWord = submittedWord[0]+'-'+submittedWord[1:]
        return modifiedWord.lower()
    return submittedWord.lower()


if __name__=='__main__':
  # Leaving enconding specification as we ran it in Windows
  testCases = open('tests.tsv', encoding="utf-8")
  for line in testCases:
    line = line.rstrip('\n')
    testColumn = line.split('\t')
    getWordClass = LowerCaseWord(testColumn[0], testColumn[1])
    lowercasedWord = getWordClass.toLower()
    if lowercasedWord != testColumn[2]:
      print('Test case failed. Expected', testColumn[2], 'when lowercasing',testColumn[0],'in language',testColumn[1],'but got',lowercasedWord)
  testCases.close()
