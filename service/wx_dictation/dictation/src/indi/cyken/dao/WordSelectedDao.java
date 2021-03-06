package indi.cyken.dao;

import java.util.List;

import indi.cyken.domain.Word;

public interface WordSelectedDao {

	List<Word> getSelectedWordsByUidCid(String userid, String courseid)throws Exception;

	int queryWordSelItem(String userid, String wordid)throws Exception;

	int deleteWordSelItem(String userid, String wordid)throws Exception;

	int addWordSelItem(String id,String userid, String wordid) throws Exception;
}
